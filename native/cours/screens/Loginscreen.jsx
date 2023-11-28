import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";

export default function Loginscreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/bg.jpeg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.bottom}
          onPress={() =>
            navigation.navigate("TabNavigator", { screen: "Game" })
          }
        >
          <Text style={styles.textBtn}>Play</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    width: 100,
    padding: 20,
    backgroundColor: "rgba(250, 250, 250, 0.3)",
    borderRadius: 10,
  },
  textBtn: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  image: {
    minHeight: "100%",
  },
});
