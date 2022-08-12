import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <span id="side-bar">
        <img src={"logo.png"} id="logo" alt="logo" />
        <div id="vertical-line"></div>
        <a href="https://github.com/mohdnuman"><img src={"https://cdn-icons-png.flaticon.com/512/2111/2111425.png"} className="social-icon" alt="github-icon"/></a><br/>
        <img src={"mail.png"} className="social-iconss" alt="mail-icon"/>
        
        
      </span>
    );
  }
}

export default Sidebar;
