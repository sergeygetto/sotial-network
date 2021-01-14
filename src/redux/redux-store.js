 import {createStore , combineReducers, applyMiddleware} from 'redux'
import {authReduser} from './auth-reduser'
import {dialogsReduser  } from './dialogs-reduser'
import { mainReduser } from './main-reduser'
import { usersReduser } from './users-reduser'
import thunkMiddleware from 'redux-thunk'

let reduser = combineReducers({

    dialogsPage : dialogsReduser,
    mainPage : mainReduser,
    usersPage : usersReduser,
    auth: authReduser
})

let store = createStore(reduser, applyMiddleware(thunkMiddleware))

window.store = store

export default store