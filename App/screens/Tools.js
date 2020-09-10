import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Hunter from "./Tools/Hunter";
import Checker from "./Tools/Checker";
import Changer from "./Tools/Changer";
import Tether from "./Tools/Tether";
import Diagnosis from "./Tools/Diagnosis";
import Speed from "./Tools/Speed";
import Ads from "./Main/Ads";
import Debug from "./Tools/Debug";

export class Tools extends Component {
  render() {
    const id = 1;
    return (
      <ScrollView style={styles.container}>
        <Hunter />
        <Checker />
        <Changer />
        <Tether />
        <Diagnosis />
        <Speed />
        <Ads />
        <Debug />
      </ScrollView>
    );
  }
}

export default Tools;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1
  }
});
