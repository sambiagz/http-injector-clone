import React, { Component } from "react";
import Logs from "./Logs/Logs";
import { ScrollView } from "react-native";

export class Log extends Component {
  render() {
    return (
      <ScrollView>
        <Logs />
      </ScrollView>
    );
  }
}

export default Log;
