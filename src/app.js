import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Index from "./components/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

export default App;
