import {
  LOAD_NEW_BEER_DATA,
  HIDE_LOADING_INDICATOR,
  SHOW_LOADING_INDICATOR,
  SHOW_NEXT_BUTTON,
  UPDATE_FILTER_STATE,
  DATA_WAS_NOT_FOUND,
  SHOW_RANDOM_BEER
} from "./types";

import store from "../store";
import axios from "axios";

export const makeApiRequestWithParameters = () => async dispatch => {
  const baseUrl = "https://api.punkapi.com/v2/beers?";

  dispatch({ type: SHOW_LOADING_INDICATOR });

  const state = store.getState();
  const beerParameters = state.filterReducer.filterState;

  const { page, per_page } = state.paginationReducer;

  let requestUrlWithParameters = baseUrl;

  const beerParametersLength = Object.keys(beerParameters).length;

  //@todo refractor to another function
  if (beerParametersLength) {
    Object.keys(beerParameters).forEach((beerParameter, index) => {
      const key = beerParameter,
        value = beerParameters[beerParameter].replace(" ", "_");

      requestUrlWithParameters += `${key}=${value}&`;
    });
  }

  const requestWithPagination =
    requestUrlWithParameters + `page=${page}&per_page=${per_page}`;
  const requestWithPaginationCheck =
    requestUrlWithParameters + `page=${page + 1}&per_page=${per_page}`;

  try {
    const response = await axios(requestWithPagination);
    const checkResponse = await axios(requestWithPaginationCheck);

    console.log(requestWithPagination, requestWithPaginationCheck);

    dispatch({ type: HIDE_LOADING_INDICATOR });

    if (!response.data.length) throw true;

    if (checkResponse.data.length) {
      dispatch({ type: SHOW_NEXT_BUTTON, showNextButton: true });
    } else {
      dispatch({ type: SHOW_NEXT_BUTTON, showNextButton: false });
    }

    dispatch({ type: LOAD_NEW_BEER_DATA, response: response.data });
  } catch (err) {
    dispatch({ type: HIDE_LOADING_INDICATOR });

    dispatch({ type: DATA_WAS_NOT_FOUND });
  }
};

export const showRandomBeer = () => async dispatch => {
  const randomBeerUrl = "https://api.punkapi.com/v2/beers/random";

  const response = await axios(randomBeerUrl);
  console.log("ShowRanodmBeer", response.data[0]);
  dispatch({ type: SHOW_RANDOM_BEER, randomBeer: response.data[0] });
};

export const updateFilterState = filterState => {
  return { type: UPDATE_FILTER_STATE, filterState };
};
