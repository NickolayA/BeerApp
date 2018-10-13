const initialState = {
    abv_gt: 'number',
    abv_lt: 'number',
    ibu_gt: 'number',
    ibu_lt: 'number',
    ebc_gt: 'number',
    ebc_lt: 'number',
    beer_name: 'string',
    yeast: 'string',
    brewed_before: 'date',
    brewed_after: 'date',
    hops: 'string',
    malt: 'string',
    food: 'string'
};



const apiParameterReducer = (state = initialState) => {
    return state;
}

export default apiParameterReducer;