function loginData(state = {
                       accessToken: '',
                       expire: ''
                   },
                   action) {
    switch (action.type) {
        case 'SETLOGINDATA':
            return {
                ...state,
                accessToken: action.payload.accessToken,
                expire: action.payload.expire
            }
        default:
            return state
    }
}

export default loginData;