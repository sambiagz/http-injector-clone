import React, { Component } from "react";
import { View, Text, CheckBox, StyleSheet } from "react-native";

export class Check extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <CheckBox />
          <Text style={styles.name}>DNS (Google DNS)</Text>
        </View>
        <View style={styles.subContainer}>
          <CheckBox />
          <Text style={styles.name}>Start SSH</Text>
        </View>
      </View>
    );
  }
}

export default Check;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    margin: 10,
    padding: 10
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "grey"
  }
});
