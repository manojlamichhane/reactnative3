import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Icons = (props) => (
  <View
    style={{
      ...styles.contianer,
      width: props.size,
      height: props.size,
      borderRadius: props.size / 2,
      backgroundColor: props.color,
      borderColor: props.bordercolor,
    }}
  >
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  contianer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1,
  },
});
export default Icons;
