import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FontAwesome5 name="telegram-plane" size={24} color="grey" />
        <Text style={styles.name}> Telegram Group</Text>
      </View>
    );
  }
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  name: { color: "grey", fontWeight: "bold" }
});
