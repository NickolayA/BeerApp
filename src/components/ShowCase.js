import React from "react";
import { connect } from "react-redux";
import BeerCard from "./BeerCard";

class ShowCase extends React.Component {
  render() {
    const beerData = this.props.beerData;
    return (
      <React.Fragment>
        {Object.keys(beerData).length ? (
          beerData.map(bd => {
            return <BeerCard key={bd.id} beerData={bd} />;
          })
        ) : (
          <h1>"Beers not founded"</h1>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    beerData: state.beerDataReducer.beerData
  };
};

export default connect(mapStateToProps)(ShowCase);
