import React, { Component } from "react";
import Navbar from "./Navbar";
import Middle from "./Middle";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <Middle />
      </div>
    );
  }
}

export default Home;
