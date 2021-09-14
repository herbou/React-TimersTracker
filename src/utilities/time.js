
function millisecondsToHuman(MS) { 
  let HH = Math.floor(MS / 1000 / 60 / 60)
  let MM = Math.floor((MS / 1000 / 60) % 60)
  let SS = Math.floor((MS / 1000) % 60)

  let format00 = t=>(t<10)?`0${t}`:t 

  return `${format00(HH)}:${format00(MM)}:${format00(SS)}`
}

function renderElapsedString(elapsed, runningSince) {
  let totalElapsed = elapsed
  if (runningSince)
    totalElapsed += Date.now() - runningSince

  return millisecondsToHuman(totalElapsed)
}




const timeUtils = {
  renderElapsedString
}
export default timeUtils