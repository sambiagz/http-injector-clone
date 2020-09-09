import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export class Ads extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>ADS</Text>
      </View>
    );
  }
}

export default Ads;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  name: { color: "grey", fontWeight: "bold" }
});
