import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todos.css";

export default class Todos extends Component {
  state = {
    text: "",
    todos: [],
  };

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text !== "") {
      this.setState({
        text: "",
        todos: [
          { text: this.state.text, complete: false },
          ...this.state.todos,
        ],
      });
    }
  };

  handleClearAll = () => {
    this.setState({
      todos: [],
    });
  };

  handleClearComplete = () => {
    this.setState(
      {
        todos: this.state.todos.filter((todo) => todo.complete === false),
      },
      () => {
        console.log("called clear complete");
        console.log(this.state.todos);
      }
    );
  };

  handleCheckChange = (e, todo) => {
    console.log("handle check change");
    var updatedTodos = this.state.todos;
    const i = this.state.todos.indexOf(todo);
    updatedTodos[i] = {
      text: todo.text,
      complete: !todo.complete,
    };
    this.setState({
      todos: updatedTodos,
    });
    console.log(this.state.todos);
  };

  render() {
    return (
      <div id="Todos">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.text}
            onChange={this.handleTextChange}
          ></input>
          <button type="submit">Add</button>
          <button onClick={this.handleClearAll}>Clear All</button>
          <button onClick={this.handleClearComplete}>Clear Complete</button>
        </form>
        <div id="Todolist">
          {this.state.todos.length > 0 ? (
            <div>
              {this.state.todos.map((todo, i) => (
                <div key={uuidv4()}>
                  <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => this.handleCheckChange(this, todo)}
                    className="todo-content"
                  ></input>
                  <div className="todo-content">{todo.text}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
