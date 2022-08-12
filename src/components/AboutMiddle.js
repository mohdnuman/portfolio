import React, { Component } from "react";

class AboutMiddle extends Component {
  render() {
    return (
      <div>
        <div className="about-middle-info">
          💭 Blockchain | FullSatck experienced Developer <br />
          💭 Born and raised in Delhi, India
          <br />
          💭Currently pursuing B.tech in Information Technogy from Guru Gobind
          Singh Indraprashta University <br />
          💭 Have a passion for devoloping decentralized applications which
          solve real world problems for people <br />
        </div>

        <div className="about-middle-info">
          <h2>Education</h2>
          💭 Senior Secondary  <br />
                From Father Agnel School - With Physics, Chemistry, And Maths (percnetage-95.6%)<br/> 
          💭 B.Tech in Information Tehnology<br />
                From Guru Gobind Singh Indraprastha University, Delhi
        </div>

        <div className="about-middle-info">
          <h2>Experience</h2>
          💭 Teaching Assistant<br />
          &nbsp;&nbsp;&nbsp;✵At Coding Ninjas<br/>
          &nbsp;&nbsp;&nbsp;✵From September,2021 to January,2022 <br/>
          💭 Full Stack Developer<br />
          &nbsp;&nbsp;&nbsp;✵At GenieGradz<br/>
          &nbsp;&nbsp;&nbsp;✵From January,2022 to March,2022 <br/>
          💭 Blockchain Developer<br />
          &nbsp;&nbsp;&nbsp;✵At Clickdee<br/>
          &nbsp;&nbsp;&nbsp;✵From March,2022 to present <br/>
        </div>

        <div className="contact-block">
          <div className="contact-block-heading">
            Interested? Connect With Me!
          </div>
          <div>
            <span className="contact-option">✧EMAIL</span>
            <span className="contact-option">✧LINKEDIN</span>
            <span className="contact-option">✧RESUME</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMiddle;
