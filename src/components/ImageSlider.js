import React, { Component } from "react";

export default class ImageSlider extends Component {
  state = {
    images: [
      "https://images.unsplash.com/photo-1640270219264-82bd8fb3c90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1640323141629-0d82b0c438dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1640051702482-66022fd487cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    ],
    imageIndex: 0,
  };

  handleNextImage = () => {
    if (this.state.imageIndex < this.state.images.length - 1) {
      this.setState({
        imageIndex: this.state.imageIndex + 1,
      });
    } else {
      this.setState({
        imageIndex: 0,
      });
    }
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            if (this.state.imageIndex > 0) {
              this.setState({
                imageIndex: this.state.imageIndex - 1,
              });
            } else {
              this.setState({
                imageIndex: this.state.images.length - 1,
              });
            }
          }}
        >
          Previous
        </button>
        <img
          id="image-element"
          src={this.state.images[this.state.imageIndex]}
          style={{ height: 500, width: 500 }}
        ></img>
        <button onClick={this.handleNextImage}>Next</button>
      </div>
    );
  }
}
