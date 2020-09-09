import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons, Octicons, MaterialIcons } from "@expo/vector-icons";

export class Server extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.name}>Server Name Indication (SNI)</Text>
          <Octicons name="pencil" size={20} color="grey" />
        </View>
        <View style={styles.subContainer}>
          <View style={styles.server}>
            <MaterialIcons name="location-on" size={24} color="grey" />
            <Text style={styles.name}>ZA #1 - SSL & SSH</Text>
          </View>
          <Ionicons name="ios-arrow-forward" size={20} color="grey" />
        </View>
      </View>
    );
  }
}

export default Server;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  name: { color: "grey", fontWeight: "bold" },
  subContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold"
  },
  server: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "bold"
  }
});
