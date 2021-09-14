import {React, Component} from 'react'
import TimerForm from './TimerForm'



class ToggleableTimerForm extends Component {
  state = {
    isFormOpen: false
  }

  handleCreateClick = timer => {
    this.setState({ isFormOpen: false })
  }

  handleCancelClick = () => {
    this.setState({ isFormOpen: false })
  }

  handleAddClick = () => {
    this.setState({ isFormOpen: true })
  }
  
  render() {
    if (this.state.isFormOpen)
      return (
        <TimerForm 
          timer={{}} 
          onSubmit={this.handleCreateClick}
          onCancel={this.handleCancelClick}
        />
      )
    //else :
      return (
        <button 
          className='add-timer-btn' 
          onClick={this.handleAddClick} >
            <i className="icon icon-plus"></i>
        </button>
      )
  }
}
  
export default ToggleableTimerForm