const reducer = (state, action) => {
    switch (action.type) {
        case 'Sort-By-Price':
            return {
                ...state,
                sort: action.payload
            };
        case 'Filter-By-Stock':
            return {
                ...state,
                byStock: !state.byStock
            };
        case 'Filter-By-Delivery':
            return {
                ...state,
                byFastDelivery: !state.byFastDelivery
            };
        case 'Filter-By-Rating':
            return {
                ...state,
                byRating: action.payload
            };
        case 'Filter-By-Search':
            return {
                ...state,
                searchQuary: action.payload
            };
        case 'Clear-Filter':
            return {
                byStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuary: ""
            }
        default:
            return state;
    }
}
export default reducer