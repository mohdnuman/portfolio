import React, { Component } from "react";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="lg" className="navbar">
          <div>
            <span className="name-role-container">
              <span>MOHD NUMAN </span>
              <span>BLOCKCHAIN | FULLSTACK DEVELOPER</span>
            </span>
            <span>
              <a href="/work">
                <div className="tab-option">WORK</div>
              </a>
              <a href="/about">
                <div className="tab-option">ABOUT</div>
              </a>
            </span>
          </div>
        </Container>
      </div>
    );
  }
}

export default Navbar;
