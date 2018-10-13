import React from "react";
import { connect } from "react-redux";

import { LOAD_NEXT_PAGE, LOAD_PREVIOUS_PAGE } from "../actions/types";
import { makeApiRequestWithParameters } from "../actions/actions";

const Pagination = props => {
  return (
    <React.Fragment>
      <button
        disabled={props.pageNumber === 1}
        className="pagination-previous"
        onClick={props.loadPreviousPage}
      >
        Previouse
      </button>

      <button
        disabled={!props.showNextButton}
        className="pagination-next"
        onClick={props.loadNextPage}
      >
        Next
      </button>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    pageNumber: state.paginationReducer.page,
    showNextButton: state.paginationReducer.showNextButton,
    beerData: state.beerDataReducer.beerData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadNextPage: () => {
      dispatch({ type: LOAD_NEXT_PAGE });
      dispatch(makeApiRequestWithParameters());
    },
    loadPreviousPage: () => {
      dispatch({ type: LOAD_PREVIOUS_PAGE });
      dispatch(makeApiRequestWithParameters());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
