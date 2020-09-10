import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export class Logs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>
          [2:11 PM] Running On Infinix X572, Android API 27
        </Text>
        <Text style={styles.name}>[2:12 PM] Application Version: 5.0.9</Text>
        <Text style={styles.name}>
          [2:11 PM] Running On Infinix X572, Android API 27
        </Text>
        <Text style={styles.name}>[2:12 PM] Application Version: 5.0.9</Text>
        <Text style={styles.name}>
          [2:11 PM] Running On Infinix X572, Android API 27
        </Text>
        <Text style={styles.name}>[2:12 PM] Application Version: 5.0.9</Text>
      </View>
    );
  }
}

export default Logs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    padding: 5
  },
  name: {
    color: "grey",
    fontSize: 16
  }
});
