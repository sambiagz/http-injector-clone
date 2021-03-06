import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export class Speed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Network Speed</Text>
          <Text style={styles.name}>Monitor your network Usage</Text>
        </View>

        <Ionicons name="ios-arrow-forward" size={20} color="grey" />
      </View>
    );
  }
}

export default Speed;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
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
  name: {
    color: "grey",
    fontWeight: "bold"
  },
  header: {
    fontSize: 17,
    fontWeight: "bold",
    color: "grey"
  }
});
