import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Start from "./Main/Start";
import Connection from "./Main/Connection";
import Server from "./Main/Server";
import Contact from "./Main/Contact";
import Ads from "./Main/Ads";
import Check from "./Main/Check";
import Comment from "./Main/Comment";

export class Main extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Start />
        <Connection />
        <Server />
        <Contact />
        <Check />
        <Ads />
        <Comment />
      </ScrollView>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1
  }
});
