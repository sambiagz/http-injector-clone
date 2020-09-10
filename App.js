import React, { Component } from "react";
import { View } from "react-native";
import Header from "./App/screens/Header";
import Nav from "./App/screens/Nav";
import Main from "./App/screens/Main";

export class App extends Component {
  state = {
    id: 1
  };
  switchTab = changeId => {
    const { id } = this.state;
    this.setState({ id: changeId });
  };

  render() {
    const { id } = this.state;
    return (
      <>
        <Header />
        <Nav switchMe={this.switchTab} />
        <Main id={id} />
      </>
    );
  }
}

export default App;
