import React, { Component } from "react";

export default class Person extends Component {
  state = {
    loading: true,
    people: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ people: data.results, loading: false });
    console.log(this.state.people);
  }

  render() {
    return (
      <div>
        <h4>Person</h4>
        <div>
          {this.state.loading ? (
            <div>...</div>
          ) : (
            <div>
              {this.state.people.map((person) => (
                <div key={person.login.uuid}>
                  <div>
                    {person.name.title + person.name.first + person.name.last}
                  </div>
                  <img src={person.picture.large} alt=""></img>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
