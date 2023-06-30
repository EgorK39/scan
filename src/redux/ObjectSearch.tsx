function objectSearch(state = [], action) {
    switch (action.type) {
        case 'SETOBJECT':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
}


export default objectSearch;