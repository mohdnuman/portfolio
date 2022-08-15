import { Container } from "@mui/system";
import React, { Component } from "react";
import AboutTop from "./AboutTop";
import AboutMiddle from "./AboutMiddle";


class About extends Component {
  render() {
    return (
      <div className="about-page">
        <Container maxWidth="lg" className="about-wrapper">
          <AboutTop/>
          <AboutMiddle/>
        </Container>
      </div>
    );
  }
}

export default About;
