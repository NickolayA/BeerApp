import { SHOW_RANDOM_BEER, HIDE_RANDOM_BEER } from "../actions/types";

const randomBeerReducer = (
  state = {
    showModal: false,
    randomBeer: {}
  },
  action
) => {
  switch (action.type) {
    case SHOW_RANDOM_BEER:
      return {
        showModal: true,
        randomBeer: action.randomBeer
      };
    case HIDE_RANDOM_BEER:
      return {
        showModal: false
      };
    default:
      return state;
  }
};

export default randomBeerReducer;
