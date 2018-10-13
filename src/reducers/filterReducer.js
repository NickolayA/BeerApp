import { UPDATE_FILTER_STATE } from "../actions/types";

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FILTER_STATE:
      return {
        filterState: action.filterState
      };
    default:
      return state;
  }
};

export default filterReducer;
