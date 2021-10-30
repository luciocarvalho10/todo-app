import { applyMiddleware, createStore } from 'redux'

import rootReducer from "./reducers";

import promise from "redux-promise"
import multi from "redux-multi"
import thunk from "redux-thunk"


const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, multi, promise)(createStore)(rootReducer, devTools)

export default store