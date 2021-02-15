import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  SectionList,
} from "react-native";
import { Foods } from "./constants";

export default function App() {
  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];
  const foodItem = Foods.map((food) => {
    return (
      <ImageBackground
        key={food.title}
        style={styles.box}
        source={{ uri: food.image }}
      >
        <Text>{food.title}</Text>
      </ImageBackground>
    );
  });

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {foodItem}
    </ScrollView>

    // <FlatList
    //   data={Foods}
    //   horizontal
    //   keyExtractor={(item) => item.title}
    //   renderItem={({ item }) => {
    //     return (
    //       <ImageBackground style={styles.box} source={{ uri: item.image }}>
    //         <Text>{item.title}</Text>
    //       </ImageBackground>
    //     );
    //   }}
    // />

    // <SectionList
    //   sections={DATA}
    //   renderItem={({ item }) => <Text>{item}</Text>}
    //   renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
    //   keyExtractor={(item, index) => item + index}
    // />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
  box: {
    height: 150,
    width: 150,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {},
});
