import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export class Connection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.server}>
          <Octicons name="file-binary" size={24} color="grey" />
          <Text style={styles.name}>SSL/TLS -> SSH</Text>
        </View>

        <Ionicons name="ios-arrow-forward" size={20} color="black" />
      </View>
    );
  }
}

export default Connection;

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
    marginLeft: 10,
    fontWeight: "bold"
  },
  server: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center"
  }
});
