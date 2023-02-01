import {
  ImageBackground,
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CarBlack = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate("CarBlackDesc");
  }, 500);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/black.jpg")}
    >
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

export default CarBlack;
