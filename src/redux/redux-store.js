import {createStore , combineReducers} from 'redux'
import {dialogsReduser  } from './dialogs-reduser'
import { mainReduser } from './main-reduser'
import { usersReduser } from './users-reduser'

let reduser = combineReducers({

    dialogsPage : dialogsReduser,
    mainPage : mainReduser,
    usersPage : usersReduser

})

let store = createStore(reduser)

export default store