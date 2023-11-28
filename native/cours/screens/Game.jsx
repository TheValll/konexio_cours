import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

const Game = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false);
    }, 300);
  };

  return (
    <ImageBackground
      source={require("../assets/bg.jpeg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.heartbar}>
        <Image source={require("../assets/3hp.png")} />
      </View>
      <Image
        source={require("../assets/banana.png")}
        style={[styles.banana, { width: 50, height: 50 }]}
      />
      <Image
        source={require("../assets/croco.png")}
        style={[styles.croco, { width: 175, height: 100 }]}
      />
      <View style={styles.character}>
        <TouchableOpacity
          onPress={handlePress}
          activeOpacity={1}
          style={[
            styles.monkey,
            isPressed ? { transform: [{ translateY: -300 }] } : null,
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
  banana: {
    position: "absolute",
    top: 450,
  },
  croco: {
    position: "absolute",
    bottom: 0,
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
