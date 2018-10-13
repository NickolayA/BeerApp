import { combineReducers } from "redux";

import apiParametersReducer from "./apiParametersReducer";
import filterReducer from "./filterReducer";
import beerDataReducer from "./beerDataReducer";
import paginationReducer from "./paginationReducer";
import loadingIndicatorReducer from "./loadingIndicatorReducer";
import randomBeerReducer from "./randomBeerReducer";

const rootReducer = combineReducers({
  apiParametersReducer,
  filterReducer,
  beerDataReducer,
  paginationReducer,
  loadingIndicatorReducer,
  randomBeerReducer
});

export default rootReducer;
