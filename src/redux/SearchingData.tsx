function SearchingData(state = {
                           innData: '',
                           numFromSearch: '',
                           startDateFromSearch: '',
                           endDateFromSearch: '',
                       },
                       action) {
    switch (action.type) {
        case 'SEARCHDATA':
            return {
                ...state,
                innData: action.payload[0],
                numFromSearch: action.payload[1],
                startDateFromSearch: action.payload[2],
                endDateFromSearch: action.payload[3]
            };
        default:
            return state
    }
}

export default SearchingData;