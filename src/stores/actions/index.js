 //simulate fetch data from server :
import Server_Data_Simulator from '../../server-data-simulator'

import {
  CHANGE_THEME,  GET_THEME,
  FETCH_TIMERS,  CREATE_TIMER,
  DELETE_TIMER,  UPDATE_TIMER,
  START_TIMER,   STOP_TIMER,
  RESET_TIMER
} from './types'




// Theme action creators :

export const changeTheme = theme => {
  window.localStorage.setItem("theme", theme)
  return { type: CHANGE_THEME, theme }
}

export const getTheme = () => {
  const theme = window.localStorage.getItem("theme") || "light"
  return { type: GET_THEME, theme }
}



// Timers action creators :

export const fetchTimers = () => async dispatch => {
  const timers = await Server_Data_Simulator.fetchTimers()
  dispatch({ type: FETCH_TIMERS, timers })
}

export const createTimer = (timer) => async dispatch => {
  const createdTimer = await Server_Data_Simulator.createTimer(timer)
  dispatch({ type: CREATE_TIMER, timer: createdTimer })
}

export const updateTimer = (timer) => async dispatch => {
  const updatedTimer = await Server_Data_Simulator.updateTimer(timer)
  dispatch({ type: UPDATE_TIMER, timer: updatedTimer })
}

export const deleteTimer = (timerID) => async dispatch => {
  await Server_Data_Simulator.deleteTimer(timerID)
  dispatch({ type: DELETE_TIMER, timerID })
}

export const startTimer = (timerID) => async dispatch => {
  const timer = await Server_Data_Simulator.startTimer(timerID)
  dispatch({ type: START_TIMER, timer })
}

export const stopTimer = (timerID) => async dispatch => {
  const timer = await Server_Data_Simulator.stopTimer(timerID)
  dispatch({ type: STOP_TIMER, timer })
}

export const resetTimer = (timerID) => async dispatch => {
  const timer = await Server_Data_Simulator.resetTimer(timerID)
  dispatch({ type: RESET_TIMER, timer })
}
