import logo from "./logo.svg";
import React from "react";
import Todos from "./components/Todos.js";
import "./App.css";
import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSlider";
import Person from "./components/Person";

class App extends React.Component {
  state = {
    visible: false,
  };
  render() {
    return (
      <div className="App">
        <h1>to-do list.</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
