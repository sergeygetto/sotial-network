 import {createStore , combineReducers, applyMiddleware, compose} from 'redux'
import {authReduser} from './auth-reduser'
import {dialogsReduser  } from './dialogs-reduser'
import { mainReduser } from './main-reduser'
import { usersReduser } from './users-reduser'
import thunkMiddleware from 'redux-thunk'
import {  reducer as formReducer } from 'redux-form'
import {appReduser} from './app-reduser'


let reducer = combineReducers({

    dialogsPage : dialogsReduser,
    mainPage : mainReduser,
    usersPage : usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reduser, applyMiddleware(thunkMiddleware))

window.store = store

export default store