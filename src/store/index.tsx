import { createStore, combineReducers } from 'redux'
import recommend from './module/recommend/reducer'

export const composeStore = createStore(
    combineReducers({
        recommend,
    }),
)
