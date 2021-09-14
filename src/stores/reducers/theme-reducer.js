import { CHANGE_THEME, GET_THEME } from '../actions/types'

export default function themeReducer(state_theme = "light", action) {
  switch (action.type){
    case CHANGE_THEME :
    case GET_THEME :
      return action.theme

    default : 
      return state_theme
  }

}