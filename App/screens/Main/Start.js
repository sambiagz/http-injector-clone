import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export class Start extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonStart}>START</Text>
      </View>
    );
  }
}

export default Start;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    padding: 15
  },
  buttonStart: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#1b8ba5",
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  }
});
