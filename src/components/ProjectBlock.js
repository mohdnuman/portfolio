import React, { Component } from "react";

class WorkTop extends Component {
  render() {
    return (
      <div className="project-block">
        <span>
          <img src={this.props.image} className="project-logo" />
        </span>
        <span>
          <h2>{this.props.heading}</h2>
          <p>
            {this.props.body}
            <br/>
            <br/>
            <a href={this.props.github} >Github here</a>
          </p>
        </span>
      </div>
    );
  }
}

export default WorkTop;
