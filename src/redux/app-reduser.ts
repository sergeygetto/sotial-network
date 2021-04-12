
import {authUserThunkCreator} from './auth-reduser'


const USER_INITIALIZATION = "auth/USER_INITIALIZATION";

export type InitialStateType = {
initialization: boolean }


const initialState: InitialStateType = {
initialization: false
}


export const appReduser = (state = initialState, action: any):InitialStateType => {
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



export const initializationUserThunkCreator = () => {
  return (dispatch: any) => {
      let promise = dispatch(authUserThunkCreator())
      Promise.all([promise]) 
      .then( () => {
        dispatch(initializationUser())
    
      })
    }}   

export default appReduser;
