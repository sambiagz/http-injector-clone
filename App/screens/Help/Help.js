import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

export class Help extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Guide</Text>
          <Text style={styles.name}>
            Its had resolving otherwise she contented therefore. Afford relied
            warmth out sir hearts sister use garden. Men day warmth formed
            admire former simple. Humanity declared vicinity continue supplied
            no an. He hastened am no property exercise of. Dissimilar comparison
            no terminated devonshire no literature on. Say most yet head room
            such just easy.
          </Text>
          <Text style={styles.name}>Facebook : https://facebook.com</Text>
          <Text style={styles.name}>Facebook : https://instagram.com</Text>
          <Text style={styles.name}>Facebook : https://twitter.com</Text>
        </View>
        <View style={styles.subContainer}>
          <Feather name="external-link" size={24} color="grey" />
          <Text style={styles.name}>About</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.name}>
            Opinionis calescere se mentemque immittant ne animalium productus de
            in. Rationi petebat punctum rotunda re co conatus aliquis ac.
            Contingit continent veritatem opinionem in de meditatio. Re liberet
            eo positis limites co im. Extat eadem veris tango parte to ac lumen.
            Antedictis asseverent iis qua etc facultates. Prava opera de ad
            timeo. Insomnia ut recenseo corporea re. Iii cogitantem difficilia
            eam rum cap perfectior requiratur desiderant facillimum.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Help;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  subContainer: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  name: {
    color: "grey",
    fontWeight: "bold"
  },
  header: {
    fontSize: 19,
    fontWeight: "bold",
    color: "grey"
  }
});
