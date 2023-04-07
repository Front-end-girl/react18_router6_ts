import * as actionTypes from './constants'
import produce from 'immer'

const initialState = {
    userInfo: [],
}

export default (state = initialState, action: any) => {
    return produce(state, draft => {
        switch (action.type) {
            case actionTypes.CHANGE_USER_INFO:
                draft.userInfo = action.data
            default:
                return draft
        }
    })
}
