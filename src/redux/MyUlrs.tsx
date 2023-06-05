function changeUrls(state = {pathname: '', search: ''}, action) {
    switch (action.type) {
        case 'SETURLTOREDUX':
            return {
                ...state,
                pathname: action.payload.pathname, search: action.payload.search


            }
        default:
            return state


    }
}

export default changeUrls;