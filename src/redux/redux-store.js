import {createStore , combineReducers} from 'redux'
import {dialogsReduser  } from './dialogs-reduser'
import { mainReduser } from './main-reduser'

let reduser = combineReducers({

    dialogsPage : dialogsReduser,
    mainPage : mainReduser

})

let store = createStore(reduser)

export default store