import React from "react";
import { connect } from "react-redux";
import { showRandomBeer } from "../actions/actions";
import BeerCard from "./BeerCard";
import { HIDE_RANDOM_BEER } from "../actions/types";

const RandomBeer = props => {
  const activeModal = props.showModal ? "is-active" : null;
  return (
    <React.Fragment>
      {props.showModal ? (
        <div className={`modal ${activeModal}`}>
          <div className="modal-background" />
          <div className="modal-content">
            <BeerCard beerData={props.randomBeer} />
          </div>
          <button
            onClick={props.closeModal}
            className="modal-close is-large"
            aria-label="close"
          />
        </div>
      ) : null}
      <button className="pagination-link" onClick={props.showRandomBeer}>
        Show Random Beer
      </button>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    showModal: state.randomBeerReducer.showModal,
    randomBeer: state.randomBeerReducer.randomBeer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showRandomBeer: () => dispatch(showRandomBeer()),
    closeModal: () => dispatch({ type: HIDE_RANDOM_BEER })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomBeer);
