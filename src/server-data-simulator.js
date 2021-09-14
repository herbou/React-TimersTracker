import {v4 as uuidv4} from 'uuid'

const DEFAULT_TIMER_TITLE   = 'Title'
const DEFAULT_TIMER_PROJECT = 'Project'
const DEFAULT_TIMER_COLOR   = 'default'

const LOCAL_STORAGE_KEY___TIMERS = "timers"


function loadTimers(){
  return (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY___TIMERS)) ||[])
}
function saveTimers(timers){
  localStorage.setItem(LOCAL_STORAGE_KEY___TIMERS, JSON.stringify(timers))
}



async function fetchTimers() {
  const timers = loadTimers()

  await new Promise(resolve => setTimeout( resolve, 0))
  return timers
}



async function createTimer(timer) {
  timer = {
    title: timer.title || DEFAULT_TIMER_TITLE,
    project: timer.project || DEFAULT_TIMER_PROJECT,
    color: timer.color || DEFAULT_TIMER_COLOR,
    id: uuidv4(),
    elapsed: 0,
    runningSince: null
  }
  const timers = [timer, ...loadTimers()]
  saveTimers(timers)
  
  await new Promise(resolve => setTimeout( resolve, 0))
  return timer
}



async function updateTimer(newTimer) {
  newTimer = {
    ...newTimer,
    title: newTimer.title || DEFAULT_TIMER_TITLE,
    project: newTimer.project || DEFAULT_TIMER_PROJECT
  }
  const timers = loadTimers()
  const timerIndex = timers.findIndex(t => t.id === newTimer.id)
  timers[timerIndex] = newTimer

  saveTimers(timers)

  await new Promise(resolve => setTimeout( resolve, 0))
  return newTimer
}



async function deleteTimer(timerID) {
  const timers = loadTimers().filter(timer=>timer.id!==timerID)
  
  saveTimers(timers)

  await new Promise(resolve => setTimeout( resolve, 0))
  return timerID
}



async function startTimer(timerID) {
  const now = Date.now()
  let updatedTimer = {}
  const timers = loadTimers().map(timer => {
    if (timer.id === timerID) {
      updatedTimer = {...timer, runningSince: now }
      return updatedTimer
    }
    else 
      return timer
  })

  saveTimers(timers)

  await new Promise(resolve => setTimeout( resolve, 0))
  return updatedTimer
}



async function stopTimer(timerID) {
  const now = Date.now()
  let updatedTimer = {}
  const timers = loadTimers().map(timer => {
    if (timer.id === timerID) {
        let lastElapsed = now - timer.runningSince
        updatedTimer = {...timer, elapsed: timer.elapsed + lastElapsed, runningSince: null }
        return updatedTimer
    } else 
      return timer
  })

  saveTimers(timers)

  await new Promise(resolve => setTimeout( resolve, 0))
  return updatedTimer
}



async function resetTimer(timerID) {
  let updatedTimer = {}
  const timers = loadTimers().map(timer => {
    if (timer.id === timerID) {
        updatedTimer = {...timer, elapsed: 0, runningSince: null }
        return updatedTimer
    } else 
      return timer
  })

  saveTimers(timers)

  await new Promise(resolve => setTimeout( resolve, 0))
  return updatedTimer
}





const Server_Data_Simulator = {
  fetchTimers,
  createTimer,
  updateTimer,
  deleteTimer,
  startTimer,
  stopTimer,
  resetTimer
}
export default Server_Data_Simulator