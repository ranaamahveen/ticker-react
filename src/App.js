import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./components/search/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="https://codingthesmartway.com"
              target="_blank"
            ></a>
            <Link to="/" className="navbar-brand">
              StockTwits Search App
            </Link>
          </nav>
          <br />
          <Route path="/" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
