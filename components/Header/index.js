import React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => (
  <View style={styles.container}>
    <ImageBackground
      style={styles.image}
      source={{
        uri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1I2ujvDmnDahAGMwTOlcTtid64TPx3MH4Zg&usqp=CAU",
      }}
    >
      <View style={{ padding: 20 }}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text
          style={{
            marginTop: 20,
            fontWeight: "bold",
            fontSize: 30,
            color: "white",
          }}
        >
          American
        </Text>
        <Text style={{ fontSize: 30, color: "white" }}>Food</Text>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
export default Header;
