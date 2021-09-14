import { combineReducers } from 'redux'
import themeReducer from './theme-reducer'
import timersReducer from './timers-reducer'

export default combineReducers({
  theme  : themeReducer,
  timers : timersReducer
})
