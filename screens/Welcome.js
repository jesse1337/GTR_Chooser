import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  Pressable,
} from "react-native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image source={require("../assets/yumimaybe2.png")} style={styles.logo} />
      <View style={styles.loginButton}>
        <Pressable onPress={() => navigation.navigate("PictureScreen")}>
          <Text style={styles.text}>SELECT</Text>
        </Pressable>
      </View>
      <View style={styles.exitButton}>
        <Pressable onPress={() => navigation.navigate("Yumi")}>
          <Image
            source={require("../assets/yumimaybe2.png")}
            style={styles.yumi}
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 150,
    width: 150,
    position: "absolute",
    top: 70,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#ff704d",
  },
  exitButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#b32400",
  },
  text: {
    alignSelf: "center",
    top: 10,
    fontSize: 25,
    color: "#ffe0b3",
  },
  yumi: {
    alignSelf: "center",
    width: 35,
    height: 35,
    top: 10,
  },
});
export default Welcome;
