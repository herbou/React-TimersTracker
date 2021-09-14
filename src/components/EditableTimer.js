import {React, Component} from 'react'
import TimerForm from './TimerForm'
import Timer from './Timer'


class EditableTimer extends Component {
  state = {
    isFormOpen: false
  }

  handleUpdateClick = timer => {
    this.setState({ isFormOpen: false })
  }

  handleCancelClick = () => {
    this.setState({ isFormOpen: false })
  }

  handleEditClick = () => {
    this.setState({ isFormOpen: true })
  }

  render() {
    if (this.state.isFormOpen)
      return (
        <TimerForm 
          timer={this.props.timer} 
          onSubmit={this.handleUpdateClick}
          onCancel={this.handleCancelClick}
        />
      )
    //else :
      return (
        <Timer
          timer={this.props.timer}
          onEditClick={this.handleEditClick}
        />
      )
  }
}


export default EditableTimer