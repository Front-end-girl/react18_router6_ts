import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import recommend from './module/recommend/reducer'
import user from './module/user/reducer'
import thunk from 'redux-thunk'

export const composeStore = createStore(
    combineReducers({
        recommend,
        user,
    }),
    compose(applyMiddleware(thunk)),
)
export default composeStore
