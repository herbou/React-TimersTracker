import {React, Component} from 'react'
import ToggleableTimerForm from './ToggleableTimerForm'
import EditableTimer from './EditableTimer'



class EditableTimerList extends Component {
  render() {
    const timers = this.props.timers
    return (
      <div className='editable-timer-list'>
        <ToggleableTimerForm />
        {timers.map(timer => (
          <EditableTimer
            key={timer.id}
            timer={timer}
          />
        ))}
      </div>
    )
  }
}

export default EditableTimerList
