import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export class Nav extends Component {
  render() {
    // const { switchMe } = this.props;
    // const switchTab = () => {
    //   this.props.switchMe(2);
    // };
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text
            style={styles.name}
            onPress={() => {
              this.props.switchMe(1);
            }}
          >
            HOME
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.name}
            onPress={() => {
              this.props.switchMe(2);
            }}
          >
            LOGS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.name}
            onPress={() => {
              this.props.switchMe(3);
            }}
          >
            TOOLS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.name}
            onPress={() => {
              this.props.switchMe(4);
            }}
          >
            HELP
          </Text>
        </TouchableOpacity>
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
