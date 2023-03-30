import * as actionTypes from './constants'

const initialState = {
    userInfo: [],
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.CHANGE_USER_INFO:
            state.userInfo = action.data
            return state
        default:
            return state
    }
}
