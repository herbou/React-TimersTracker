import {React, Component} from 'react'


class TimerActionButtons extends Component {

  renderActionButton = (label, cssClasses, onClickHandler)=>(
    <button 
      className={cssClasses}  
      onClick={onClickHandler}>
        {label}
    </button>
  )

  render() {
    if (this.props.timerIsRunning)
      return this.renderActionButton("Stop", "timer-action-btn stop", this.props.onStopClick)
    else
      return this.renderActionButton("Start", "timer-action-btn start", this.props.onStartClick)
  }
}

export default TimerActionButtons
