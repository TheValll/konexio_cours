// IMPORT MODULES

import React, { useState, useEffect } from "react";
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

  // JUMP FUNCTION

  const handlePress = () => {
    setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false);
    }, 300);
  };

  // BANANA ANIMATION

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
          <Image source={require("../assets/monkey.png")} />
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
});

export default Game;
