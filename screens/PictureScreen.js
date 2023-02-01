import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";

const PictureScreen = () => {
  const navigation = useNavigation();

  const pressBlack = () => {
    navigation.navigate("CarBlack");
  };
  const pressWhite = () => {
    navigation.navigate("CarWhite");
  };
  const pressSilver = () => {
    navigation.navigate("CarSilver");
  };
  const pressChrome = () => {
    navigation.navigate("CarChrome");
  };
  const test = () => {
    navigation.navigate("Tester");
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/screenBack.jpg")}
    >
      <View>
        <Text style={styles.text}>choose your</Text>
        <View style={styles.header}>
          <Image
            source={require("../assets/yumimaybe2.png")}
            style={styles.yumi}
          />
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Image
            source={require("../assets/yumimaybe2.png")}
            style={styles.yumi}
          />
        </View>

        <View style={styles.colors}>
          <Pressable onPress={pressBlack}>
            <View style={styles.black} />
          </Pressable>

          <Pressable onPress={pressWhite}>
            <View style={styles.white} />
          </Pressable>

          <Pressable onPress={pressSilver}>
            <View style={styles.silver} />
          </Pressable>

          <Pressable onPress={pressChrome}>
            <View style={styles.chrome} />
          </Pressable>
        </View>

        <View style={styles.backButton}>
          <Pressable onPress={() => navigation.navigate("Welcome")}>
            <Text style={styles.homeText}>return</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    alignSelf: "center",
    justifyContent: "flex-start",
    top: -100,
  },
  header: {
    top: -100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  yumi: {
    height: 75,
    width: 75,
  },
  logo: {
    height: 100,
    width: 100,
  },
  colors: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    height: 350,
    width: 100,
    top: -50,
  },
  backButton: {
    justifyContent: "center",
    alignSelf: "center",
    width: 100,
    height: 100,
    top: 100,
  },
  homeText: {
    alignSelf: "center",
    fontSize: 30,
    color: "white",
  },
  black: {
    backgroundColor: "black",
    height: 75,
    width: 75,
    borderRadius: 25,
  },
  blackButton: {
    height: 75,
    width: 75,
    backgroundColor: "red",
  },
  white: {
    backgroundColor: "white",
    height: 75,
    width: 75,
    borderRadius: 25,
  },
  silver: {
    backgroundColor: "#999999",
    height: 75,
    width: 75,
    borderRadius: 25,
  },
  chrome: {
    backgroundColor: "#bfbfbf",
    height: 75,
    width: 75,
    borderRadius: 25,
  },
});

export default PictureScreen;
