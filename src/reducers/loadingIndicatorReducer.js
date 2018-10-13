import {
  SHOW_LOADING_INDICATOR,
  HIDE_LOADING_INDICATOR
} from "../actions/types";

const loadingIndicatorReducer = (
  state = {
    show: false
  },
  action
) => {
  switch (action.type) {
    case SHOW_LOADING_INDICATOR:
      return {
        show: true
      };
    case HIDE_LOADING_INDICATOR:
      return {
        show: false
      };
    default:
      return state;
  }
};

export default loadingIndicatorReducer;
