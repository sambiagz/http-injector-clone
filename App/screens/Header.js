import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  StatusBar
} from "react-native";
import {
  AntDesign,
  Fontisto,
  MaterialCommunityIcons
} from "@expo/vector-icons";

export class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <AntDesign name="bars" size={24} color="white" />
        </View>
        <View>
          <Text style={styles.name}>HTTP Injector</Text>
        </View>
        <View>
          <MaterialCommunityIcons name="settings" size={24} color="white" />
        </View>
        <View>
          <MaterialCommunityIcons name="file-import" size={24} color="white" />
        </View>
        <View>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="white"
          />
        </View>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1b8ba5",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 25
  },
  icons: {
    width: 30,
    height: 30
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});
