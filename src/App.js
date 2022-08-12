import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch,withRouter  } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route exact path="/about" component={withRouter(About)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
