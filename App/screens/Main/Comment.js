import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export class Comment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>JOIN us on Telegram at @kenyafreenet</Text>
        <Text style={styles.name}>You are all welcome to the family</Text>
        <Text style={styles.name}>
          Rse sadas 13 asdas 125sad 15125 sas 1151 adsad 1511asdasad151512 s dad
          sad1 212512512 sda d 1512 adasdojn d124isa8abndnn 1jsud901j
        </Text>
      </View>
    );
  }
}

export default Comment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 20,
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
  name: {
    fontSize: 16,
    color: "grey"
  }
});
