import React from "react";
import "./App.css";
import data from "./data";
import Name from "./Components/Name";
import Movies from "./Components/Movies";
import Info from "./Components/Info";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
      i: 0
    };
  }

  handleClick = e => {
    if (e.target.name === "next") {
      if (this.state.i === 24) {
        this.setState({
          i: (this.state.i = 0)
        });
      } else {
        this.setState({
          i: this.state.i + 1
        });
      }
    } else if (this.state.i === 0) {
      this.setState({
        i: (this.state.i = 24)
      });
    } else {
      this.setState({
        i: this.state.i - 1
      });
    }
  };
  render() {
    return (
      <div className="App">
        <header className="home-header">
          <div className="home">Home</div>
        </header>
        <div className="center">
          <div className="information-body">
            <header className="count-header">
              <div className="counter">{this.state.i + 1}/25</div>
            </header>
            {<Name className="name" person={this.state.people[this.state.i]} />}
            <br />
            {<Info className="info" person={this.state.people[this.state.i]} />}
            <br />
            {
              <Movies
                className="Movies"
                person={this.state.people[this.state.i]}
              />
            }

            <button
              className="previous"
              name="previous"
              onClick={this.handleClick}
            >
              Previous
            </button>
            <button className="next" name="next" onClick={this.handleClick}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
