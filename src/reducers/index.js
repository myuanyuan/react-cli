import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loginData from './login'

export default combineReducers({
  router: routerReducer,
  loginData,
})