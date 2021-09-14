import {
  FETCH_TIMERS,  CREATE_TIMER,
  DELETE_TIMER,  UPDATE_TIMER,
  START_TIMER,   STOP_TIMER,
  RESET_TIMER
} from '../actions/types'

export default function timersReducer(state_timers = [], action) {
  switch (action.type) {
    
    case FETCH_TIMERS: {
      const timers = action.timers
      
      return timers
    }
    
    case CREATE_TIMER: {
      return [action.timer, ...state_timers]
    }

    case DELETE_TIMER: {
      return [...state_timers].filter(timer => timer.id !== action.timerID)
    }


    case UPDATE_TIMER:
    case START_TIMER:
    case STOP_TIMER:
    case RESET_TIMER:
      return timerUpdateReducer(state_timers, action.timer)
  


    default: return state_timers
  
  }
}


function timerUpdateReducer(state_timers = [], timer) {
  const timers = state_timers.map(t => {
    if (t.id === timer.id)
      return timer
    else
      return t
  })
  
  return timers
}