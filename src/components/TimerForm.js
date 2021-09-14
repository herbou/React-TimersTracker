import COLORS from '../constants/colors'
import {React, Component} from 'react'
import { connect } from 'react-redux'
import {
  createTimer,
  updateTimer
} from '../stores/actions'




class TimerForm extends Component {
  state = {
    title: this.props.timer.title || '',
    project: this.props.timer.project || '',
    color : this.props.timer.color || COLORS[0]
  }

  handleTitleChange   = e => this.setState({ title:   e.target.value })
  handleProjectChange = e => this.setState({ project: e.target.value })
  handleColorChange   = e => this.setState({ color:   e.target.value }) 

  handleSubmit = () => {
    const timer = {
      ...this.props.timer,
      title   : this.state.title,
      project : this.state.project,
      color   : this.state.color
    }

    if (!!timer.id)
      this.props.updateTimer(timer)
    else
      this.props.createTimer(timer)

    this.props.onSubmit()
  }

  render() {
    const timer = this.props.timer
    const submitText = timer.id ? 'Update' : 'Create'

    return (
      <div className='timer-form card'>
        <div className='field'>
          <label>Title</label>
          <input 
            type='text' 
            value={this.state.title} 
            onChange={this.handleTitleChange}
          />
        </div>
        <div className='field'>
          <label>Project</label>
          <input 
            type='text' 
            value={this.state.project}
            onChange={this.handleProjectChange}
          />
        </div>
        <div className='field color-field'>
          <label>Color</label>
          <div className="colors-list">
            {COLORS.map(color=>(
              <input 
                key={color} 
                title={color}
                name={`${submitText.toLowerCase()}-${timer.id||'empty'}`}
                type="radio" 
                className="color" 
                style={{background:color.value, '--color':`var(--color-timer-${color})`}} 
                value={color} 
                checked={color === this.state.color}
                onChange={this.handleColorChange}
              />
            ))}
          </div>
        </div>

        <div className='btns'>
          <button 
            className='btn submit-btn' 
            onClick={this.handleSubmit} >
             {submitText}
          </button>
          <button 
            className='btn cancel-btn' 
            onClick={this.props.onCancel} >
              Cancel
          </button>
        </div>
      </div>
    )
  }
}


export default connect(
  null,
  {createTimer, updateTimer}
)(TimerForm)
