import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: "",
      results: [],
      symbol: [],
      count: [],
      showMe: false
    };
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.checkTicker = this.checkTicker.bind(this);
  }
  onChangeSearch(e) {
    this.setState({ items: e.target.value });
  }
  checkTicker(e) {
    e.preventDefault();
    let sortData = [];
    let tweetCount = [];
    let symbolVal = [];
    const itemArray = this.state.items.split(",");
    console.log("itemArray: ", itemArray.length);
    for (let i = 0; i < itemArray.length; i++) {
      axios
        .get(`http://localhost:4000/todos/${itemArray[i]}`)
        .then(response => {
          tweetCount.push(response.data.messages.length);
          symbolVal.push(itemArray[i]);
          sortData = sortData.concat(response.data.messages);
          sortData.sort((a, b) => b.created_at.localeCompare(a.created_at));
          this.setState({
            symbol: symbolVal,
            count: tweetCount,
            results: sortData,
            showMe: true
          });
        })
        .catch(function(error) {
          console.log(error);
        });
      setTimeout(axios, 5000);
    }
  }
  symbolName() {
    return this.state.symbol.map(function(eachSymbol, index) {
      return <div key={index}>{eachSymbol}</div>;
    });
  }
  symbolCount() {
    return this.state.count.map(function(eachSymbol, index) {
      return <div key={index}>{eachSymbol}</div>;
    });
  }
  handleCount() {
    if (this.state.showMe) {
      return (
        <table border={1}>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Number of Tweets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.symbolName()}</td>
              <td>{this.symbolCount()}</td>
            </tr>
          </tbody>
        </table>
      );
    }
  }
  handleHeader() {
    if (this.state.showMe) {
      return (
        <tr>
          <th>Number</th>
          <th>Tweets</th>
          <th>Time Stamp</th>
        </tr>
      );
    }
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-6">
            <h3 className="text-danger">Search for Tweets</h3>
            <br />
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.items}
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>
            <div className="col-md-1">
              <button
                className="form-control btn-primary"
                onClick={this.checkTicker}
              >
                Search
              </button>
            </div>
          </div>
          <br />
          {this.handleCount()}
          <br />
          <table border={1}>
            <tbody>
              {this.handleHeader()}
              {this.state.results.map(function(eachField, index) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{eachField.body}</td>
                    <td>{eachField.created_at}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
