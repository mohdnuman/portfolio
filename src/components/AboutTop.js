import { Container } from "@mui/system";
import React, { Component } from "react";

class AboutTop extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <div className="about-text">Hello,it's Numan here</div>
        <div>
        <img src={"profile.jpg"} className="profile-pic" alt="profile-pic"/>
        <span className="meet-me-text">Meet me ―――――――</span>
        </div> 
      </Container>
    );
  }
}

export default AboutTop;
