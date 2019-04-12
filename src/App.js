import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UnsplashComponent from "unsplash-assignment/build/index";

class App extends Component {
  render() {
    return (
      <div className="container">
        {
          <UnsplashComponent
            seconds="3"
            apiKey={process.env.REACT_APP_UNSPLASH_API_KEY}
          />
        }
      </div>
    );
  }
}

export default App;
