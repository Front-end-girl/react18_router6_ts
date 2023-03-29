import * as actionTypes from './constants'

const initialState = {
    bannerList: [],
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.CHANGE_BANNER:
            state.bannerList = action.data
            return state
        default:
            return state
    }
}
