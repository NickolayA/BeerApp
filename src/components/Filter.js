import React from "react";
import { connect } from "react-redux";
import FilterItem from "./FilterItem";

import { RESET_PAGINATION } from "../actions/types";

import {
  makeApiRequestWithParameters,
  updateFilterState
} from "../actions/actions";

class Filter extends React.Component {
  onFilterSubmit = e => {
    e.preventDefault();

    this.props.resetPagination();

    const beerParameters = {};
    Object.keys(this.props.apiParameters).forEach(key => {
      const value = e.target.elements[key].value;
      if (value) {
        if (key === "brewed_before" || key === "brewed_after") {
          let tempValue = value
            .split("-")
            .reverse()
            .join("-");
          beerParameters[key] = tempValue;
          return;
        }
        beerParameters[key] = value;
      }
    });
    this.props.updateFilterState(beerParameters);
    this.props.updateBeerReducerState();
  };

  render() {
    return (
      <form onSubmit={this.onFilterSubmit}>
        {Object.keys(this.props.apiParameters).map(parameter => {
          return (
            <FilterItem
              key={"k" + parameter}
              fieldName={parameter}
              fieldType={this.props.apiParameters[parameter]}
            />
          );
        })}
        <div className="field">
          <button className="button is-link">Filter</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { apiParameters: state.apiParametersReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBeerReducerState: () => dispatch(makeApiRequestWithParameters()),
    updateFilterState: filterState => dispatch(updateFilterState(filterState)),
    resetPagination: () => dispatch({ type: RESET_PAGINATION })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
