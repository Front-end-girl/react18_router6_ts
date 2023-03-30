import { createStore, combineReducers } from 'redux'
import recommend from './module/recommend/reducer'
import user from './module/user/reducer'

export const composeStore = createStore(
    combineReducers({
        recommend,
        user,
    }),
)
export default composeStore
