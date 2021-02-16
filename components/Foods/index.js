import React from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { Data } from "../../constants";
import { AntDesign } from "@expo/vector-icons";
import Icons from "../Icons";
import { AirbnbRating } from "react-native-ratings";

const Foods = () => (
  <View>
    <FlatList
      data={Data}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={{ paddingLeft: 10, flex: 4 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 12, color: "grey" }}>
                {item.description}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Text style={{ fontSize: 15, color: "grey" }}>{item.time}</Text>
                <Text
                  style={{ fontSize: 15, color: "grey" }}
                >{`Rating:${item.rating}`}</Text>
              </View>
            </View>
            <View
              style={{
                flex: 2,

                alignItems: "center",
              }}
            >
              <Icons size={30} color="#e52b2b">
                <AntDesign name="plus" size={24} color="white" />
              </Icons>
              <Text
                style={{ marginTop: 20, fontWeight: "bold" }}
              >{`$${item.price}`}</Text>
            </View>
          </View>
        );
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  image: {
    flex: 2,
    width: 70,
    height: 90,
    borderRadius: 20,
  },
});
export default Foods;
