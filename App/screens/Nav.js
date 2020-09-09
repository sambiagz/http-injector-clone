import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export class Nav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>HOME</Text>
        <Text style={styles.name}>LOGS</Text>
        <Text style={styles.name}>TOOLS</Text>
        <Text style={styles.name}>HELP</Text>
      </View>
    );
  }
}

export default Nav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1b8ba5",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  name: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  }
});
