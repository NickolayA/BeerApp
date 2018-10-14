import { LOAD_NEW_BEER_DATA, DATA_WAS_NOT_FOUND } from "../actions/types";

const beerDataReducer = (
  state = {
    beerData: {}
  },
  action
) => {
  switch (action.type) {
    case DATA_WAS_NOT_FOUND:
      return {
        beerData: {}
      };
    case LOAD_NEW_BEER_DATA:
      return {
        beerData: action.response
      };
    default:
      return state;
  }
};

export default beerDataReducer;
