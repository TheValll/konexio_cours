import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

const Game = () => {
  //SET VARIABLES

  const [isPressed, setIsPressed] = useState(false);
  const [bananas, setBananas] = useState([]);
  const [score, setScore] = useState(0);
  let log = 0;

  const view1Ref = useRef(null);
  const view2Ref = useRef(null);

  const checkCollision = () => {
    if (!view1Ref.current || !view2Ref.current) return false;

    const view1 = view1Ref.current;
    const view2 = view2Ref.current;

    const view1Layout = { x: 0, y: 0, width: 50, height: 50 };
    const view2Layout = { x: 0, y: 0, width: 100, height: 100 };

    view1.measureInWindow((x1, y1, width1, height1) => {
      view1Layout.x = x1;
      view1Layout.y = y1;
      view1Layout.width = width1;
      view1Layout.height = height1;
    });

    view2.measureInWindow((x2, y2, width2, height2) => {
      view2Layout.x = x2;
      view2Layout.y = y2;
      view2Layout.width = width2;
      view2Layout.height = height2;

      const collisionDetected =
        view1Layout.x < view2Layout.x + view2Layout.width &&
        view1Layout.x + view1Layout.width > view2Layout.x &&
        view1Layout.y < view2Layout.y + view2Layout.height &&
        view1Layout.y + view1Layout.height > view2Layout.y;

      if (collisionDetected) {
        log = log + 1;
        console.log(log);
        console.log("--------");
        setScore((prevScore) => prevScore + 1);
      }
    });
  };

  useEffect(() => {
    const collisionInterval = setInterval(checkCollision, 100);

    return () => {
      clearInterval(collisionInterval);
    };
  }, []);

  const handlePress = () => {
    setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false);
    }, 200);
  };

  useEffect(() => {
    const bananaAnimation = new Animated.Value(-50);
    const bananaInterval = setInterval(() => {
      setBananas((prevBananas) => {
        return [...prevBananas, bananaAnimation];
      });

      Animated.timing(bananaAnimation, {
        toValue: 450,
        duration: 2500,
        useNativeDriver: true,
      }).start(() => {
        const index = bananas.indexOf(bananaAnimation);
        if (index !== -1) {
          setBananas((prevBananas) => {
            const updatedBananas = [...prevBananas];
            updatedBananas.splice(index, 1);
            return updatedBananas;
          });
          bananaAnimation.setValue(-50);
        }
      });
    }, 2000);

    return () => {
      clearInterval(bananaInterval);
    };
  }, [bananas]);

  return (
    <ImageBackground
      source={require("../assets/bg.jpeg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.heartbar}>
        <Image source={require("../assets/3hp.png")} />
      </View>
      <Text style={styles.score}>Score : {score}</Text>
      {bananas.map((banana, index) => (
        <Animated.Image
          key={index}
          source={require("../assets/banana.png")}
          ref={view1Ref}
          style={[
            styles.banana,
            { width: 50, height: 50, transform: [{ translateX: banana }] },
          ]}
        />
      ))}
      <View style={styles.character}>
        <TouchableOpacity
          onPress={handlePress}
          activeOpacity={1}
          style={[
            styles.monkey,
            isPressed ? { transform: [{ translateY: -325 }] } : null,
          ]}
        >
          <Image source={require("../assets/monkey.png")} ref={view2Ref} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    minHeight: "100%",
  },
  heartbar: {
    position: "absolute",
    margin: 20,
  },
  score: {
    position: "absolute",
    color: "white",
    top: "30%",
    left: "35%",
    fontSize: 36,
  },
  banana: {
    position: "absolute",
    top: "50%",
    left: -50,
  },
  character: {
    minHeight: "100%",
    position: "relative",
  },
  monkey: {
    maxWidth: 100,
    position: "absolute",
    bottom: 10,
    left: "50%",
    marginLeft: -50,
  },
  deleteBanana: {
    display: "none",
  },
});

export default Game;
