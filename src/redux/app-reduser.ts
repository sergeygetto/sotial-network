
import {authUserThunkCreator} from './auth-reduser'


const USER_INITIALIZATION = "auth/USER_INITIALIZATION";



const initialState = {
initialization: false,

    }

export const appReduser = (state = initialState, action: any) => {
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


export const initializationUser = () => ({ type: USER_INITIALIZATION});

export const initializationUserThunkCreator = () => {
  return (dispatch: any) => {
      let promise = dispatch(authUserThunkCreator())
      Promise.all([promise]) 
      .then( () => {
        dispatch(initializationUser())
    
      })
    }}   

export default appReduser;
