import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Icons from "./components/Icons";
import { MaterialIcons } from "@expo/vector-icons";
import Items from "./components/Items";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.variety}>
        <View style={styles.menu}>
          <Icons size={40} color="white" bordercolor="grey">
            <MaterialIcons name="menu" size={30} color="#c62121" />
          </Icons>
        </View>
        {/* <Items /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 10,
  },
  variety: {
    flex: 3,
    backgroundColor: "white",
    borderRadius: 20,
  },
  menu: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
