import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import LoadingIndicator from "./components/LoadingIndicator";
import ShowCase from "./components/ShowCase";
import RandomBeer from "./components/RandomBeer";

class App extends Component {
  render() {
    return (
      <div className="App columns">
        <div className="column">
          <Filter />
          <RandomBeer />
        </div>
        <div className="column">
          <Pagination />
          <ShowCase />
        </div>
        {this.props.showLoadingIndicator ? <LoadingIndicator /> : null}
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
