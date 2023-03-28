import { createStore, combineReducers } from 'redux'
import Reducer from './reducer'

export const composeStore = createStore(
    combineReducers({
        test: Reducer,
    }),
)
