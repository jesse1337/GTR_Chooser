import {
  ImageBackground,
  Image,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CarChromeDesc = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/chrome.png")}
    >
      <Text style={styles.description}>mm mehhm</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("PictureScreen")}
      >
        <Image
          source={require("../assets/yumimaybe2.png")}
          style={styles.yumi}
        />
      </Pressable>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  description: {
    fontSize: 50,
    alignSelf: "center",
    color: "lightgray",
    top: -700,
  },
  button: {
    width: "100%",
    height: 75,
    backgroundColor: "#1a1a1a",
  },
  yumi: {
    height: 35,
    width: 35,
    alignSelf: "center",
    top: 10,
  },
});

export default CarChromeDesc;
