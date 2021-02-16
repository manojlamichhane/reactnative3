import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, Button } from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = () => {
    Alert.alert(
      "Do you want to continue?",
      "You are about to login to this page",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Login canceled"),
        },
        {
          text: "OK",
          onPress: () => console.log("Login successful"),
        },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.Inputfield}
        placeholder="Username"
        value={username}
        onChangeText={(e) => setUsername(e)}
      />
      <TextInput
        style={styles.Inputfield}
        placeholder="Password"
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      <Button title="Login" onPress={formHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Inputfield: {
    paddingLeft: 20,
    width: 300,
    height: 40,
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    backgroundColor: "white",
  },
});
