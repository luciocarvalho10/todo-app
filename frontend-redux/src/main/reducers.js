import {combineReducers} from 'redux'
import { description } from './descriptionReducer'
import { list } from './listReducer'

const rootReducer = combineReducers({
  description,
  list,
})

export default rootReducer