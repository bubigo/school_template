import { createStore } from 'redux'
import {rootReducer} from './reducersRedux'


export const store = createStore(rootReducer)
export const state = store.getState()
