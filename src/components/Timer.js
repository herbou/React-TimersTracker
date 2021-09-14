import timeUtils from '../utilities/time'
import {React, Component} from 'react'
import TimerActionButtons from './TimerActionButtons'
import { connect } from 'react-redux'
import {
  deleteTimer,
  startTimer,
  stopTimer,
  resetTimer
} from '../stores/actions'



class Timer extends Component {

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50)
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval)
  }


  deleteTimer = () => {
    if (window.confirm("Delete timer ?"))
      this.props.deleteTimer(this.props.timer.id)
  }
    
  startTimer = () => {
    this.props.startTimer(this.props.timer.id)
  }

  stopTimer = () => {
    this.props.stopTimer(this.props.timer.id)
  }

  resetTimer = () => {
    if (window.confirm("Reset timer ?"))
      this.props.resetTimer(this.props.timer.id)
  }

  render() {
    const timer = this.props.timer

    const elapsedString = timeUtils.renderElapsedString(timer.elapsed, timer.runningSince)

    const cssStyle = {"--color-timer": `var(--color-timer-${timer.color})` }

    return (
      <div className='timer card' style={cssStyle}>
        <div className='header'>
          <b className="title">
            {timer.title}
          </b>
          <span className="project">
            {timer.project}
          </span>
        </div>

        <div className='time'>
          <h2>
            {elapsedString}
          </h2>
        </div>

        <div className='edit-delete-reset-btns'>
          <button 
            title="Edit timer" 
            className='btn edit-btn' 
            onClick={this.props.onEditClick}>
          </button>
          <button 
            title="Delete timer" 
            className='btn delete-btn' 
            onClick={this.deleteTimer}>
          </button>
          <button 
            title="Reset timer" 
            className='btn reset-btn' 
            onClick={this.resetTimer}>
          </button>
        </div>

        <TimerActionButtons
          timerIsRunning={!!timer.runningSince}
          onStartClick={this.startTimer}
          onStopClick={this.stopTimer}
        />

      </div>
    )
  }
}

export default connect(
  null,
  {deleteTimer, startTimer, stopTimer, resetTimer}
)(Timer)