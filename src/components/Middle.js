import React, { Component } from "react";
import Container from "@mui/material/Container";
import Sidebar from "./Sidebar";

class Middle extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="lg" className="middle-banner">
          <Sidebar />
          <div className="info">
            I am Numan, a blockchain | fullstack developer based in Delhi,
            India, who's passionate about solving real world problems using the
            blockchain technology. I am all about Creating decentralized
            blockchain applications using the etheruem or any other evm based
            blockchain stack.
          </div>
        </Container>
      </div>
    );
  }
}

export default Middle;
