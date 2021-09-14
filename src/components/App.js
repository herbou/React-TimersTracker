import './App.scss'
import {React, Component} from 'react'
import EditableTimerList from './EditableTimerList'
import { connect } from 'react-redux'
import { fetchTimers, getTheme, changeTheme } from '../stores/actions'


const FILTERS = {
  all     : () => true ,
  running : (timer) => !!timer.runningSince ,
  stopped : (timer) => !timer.runningSince
}



class App extends Component {
  state = {
    timersFilter : FILTERS.all
  }

  componentDidMount(){
    this.props.getTheme()
    this.props.fetchTimers()
  }

  changeFilter = (filter)=>{
    this.setState({timersFilter: filter})
  }

  renderFilter = (label, count, filter) => {
    return (
      <div 
        className={`filter ${(filter===this.state.timersFilter)?'active':''}`} 
        onClick={()=>this.changeFilter(filter)}>
          <span className="label">{label}</span>
          <span className="count">{count}</span>
      </div>
    )
  }

  render() {
    const timers = this.props.timers

    const allCount     = timers.length
    const runningCount = timers.filter(FILTERS.running).length
    const stoppedCount = timers.filter(FILTERS.stopped).length

    const theme = this.props.theme
    const inverseTheme = theme==='light'?'dark':'light'

    document.body.classList.value=""
    document.body.classList.add("theme-"+theme)

    return (
      <div className='app'>
        <div className='container'>
          <div className="app-header">
            <h3>Timers tracker</h3>

            <div className="filters">
              {this.renderFilter("All", allCount, FILTERS.all)}
              {this.renderFilter("Running", runningCount, FILTERS.running)}
              {this.renderFilter("Stopped", stoppedCount, FILTERS.stopped)}
            </div>

            <button 
              title={`Switch to ${inverseTheme} theme`}
              className={`icon icon-theme theme-${theme}`}
              onClick={()=>this.props.changeTheme(inverseTheme)} >
            </button>
          </div>

          <EditableTimerList timers={timers.filter(this.state.timersFilter)} />
        </div>
      </div>
    )
  }
}



const mapStateToProps = ({ timers, theme }) => {
  return {timers, theme}
}
export default connect(
  mapStateToProps,
  {fetchTimers, getTheme, changeTheme}
)(App)
