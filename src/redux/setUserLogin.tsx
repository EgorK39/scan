function setUserLogin(state = {
                          successLogin: ''
                      },
                      action) {
    switch (action.type) {
        case 'setSuccessLogin':
            return {
                ...state,
                successLogin: action.payload,
            }
        default:
            return state
    }
}

export default setUserLogin;