import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Home from "./Home";
import Log from "./Log";
import Tools from "./Tools";
import Help from "./Help/Help";

export class Main extends Component {
  render() {
    const { id } = this.props;
    switch (id) {
      case 1:
        return <Home />;
      case 2:
        return <Log />;
      case 3:
        return <Tools />;
      case 4:
        return <Help />;
      default:
        return <Home />;
    }
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1
  }
});
