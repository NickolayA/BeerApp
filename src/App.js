import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import ShowCase from "./components/ShowCase";
import RandomBeer from "./components/RandomBeer";

class App extends Component {
  render() {
    return (
      <div className="App columns">
        <div className="column">
          <Filter />
        </div>
        <div className="column">
          <RandomBeer />
          {this.props.showLoadingIndicator ? (
            <Spinner name="three-bounce" />
          ) : (
            <ShowCase />
          )}
          <Pagination />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showLoadingIndicator: state.loadingIndicatorReducer.show
  };
};
export default connect(mapStateToProps)(App);
