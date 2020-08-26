import { combineReducers } from 'redux'

import fridgeReducer from './fridgeReducer'

const rootReducer = combineReducers({
  fridge: fridgeReducer,
})

export default rootReducer