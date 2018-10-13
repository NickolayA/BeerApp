const initialState = {
  abv_gt: "number",
  abv_lt: "number",
  ibu_gt: "number",
  ibu_lt: "number",
  ebc_gt: "number",
  ebc_lt: "number",
  beer_name: "text",
  yeast: "text",
  brewed_before: "month",
  brewed_after: "month",
  hops: "text",
  malt: "text",
  food: "text"
};

const apiParameterReducer = (state = initialState) => {
  return state;
};

export default apiParameterReducer;
