import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import web3 from "./web3";
import { BrowserRouter as Router, Route, Switch,withRouter  } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route exact path="/about" component={withRouter(About)} />
            <Route exact path="/work" component={withRouter(Work)} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
