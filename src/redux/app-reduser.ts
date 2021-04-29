
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {authUserThunkCreator} from './auth-reduser'
import { AppStateType } from './redux-store';


const USER_INITIALIZATION = "auth/USER_INITIALIZATION";

export type InitialStateType = {
initialization: boolean }


const initialState: InitialStateType = {
initialization: false
}

type ActionsTypes = InitializationUserActionType
export const appReduser = (state = initialState, action: ActionsTypes):InitialStateType => {
  switch (action.type) {
    case USER_INITIALIZATION:
    return {
      ...state, 
      initialization: true
    }
    default:
      return state;
  }
};


type InitializationUserActionType = {
    type: typeof USER_INITIALIZATION
}
export const initializationUser = (): InitializationUserActionType =>  ({ type : USER_INITIALIZATION});


type ThunkType = ThunkAction<Promise<void>, AppStateType ,unknown, ActionsTypes >

export const initializationUserThunkCreator = () => {
  return (dispatch: Dispatch<ActionsTypes|any>) => {
      let promise = dispatch(authUserThunkCreator())
      Promise.all([promise]) 
      .then( () => {
        dispatch(initializationUser())
    
      })
    }}   

export default appReduser;
