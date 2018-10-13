import { LOAD_NEW_BEER_DATA } from "../actions/types";

const beerDataReducer = (state = { beerData: {} }, action) => {
  switch (action.type) {
    case LOAD_NEW_BEER_DATA:
      return {
        beerData: action.response
      };
    default:
      return state;
  }
};

export default beerDataReducer;
