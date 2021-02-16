import React from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { Data } from "../../constants";
import { AntDesign } from "@expo/vector-icons";
import Icons from "../Icons";

const Items = () => (
  <View>
    <FlatList
      data={Data}
      renderItem={({ item }) => {
        return (
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.container} source={{ uri: item.image }} />;
            {/* <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <View>
                <Text>{item.time}</Text>
                <Text>{item.rating}</Text>
              </View>
            </View>
            <Icons size={40} color="#ed2d2d">
              <AntDesign name="plus" size={24} color="white" />
            </Icons>
            <Text>{item.price}</Text> */}
          </View>
        );
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
});
export default Items;
