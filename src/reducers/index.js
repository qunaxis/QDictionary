import { combineReducers } from 'redux'
import user from './user'
import dictionaries from './dictionaries'
import appState from './appState'

export default combineReducers({
    user,
    dictionaries,
    appState
})
