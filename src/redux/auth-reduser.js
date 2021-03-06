 import { stopSubmit } from 'redux-form';
import { captchaUrlSecurity, getHeader , login , logout } from '../api/api';


const AUTH_USERS_DATA = "auth/AUTH-USERS-COMPONENT";
const SET_CAPTCHA_URL = "auth/SET-CAPTCHA-URL"


const initialState = {
id: null,
email: null,
login: null,
isAuth: false,
captchaUrl: null
    }

export const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USERS_DATA:
    return {
      ...state, 
      ...action.data,
    }
    case  SET_CAPTCHA_URL:
    return {
      ...state, 
      ...action.data,
    }
    
    default:
      return state;
  }
};


export const authUsersData = (id , email , login , isAuth) => ({ type: AUTH_USERS_DATA, data: {id , email , login , isAuth} });

export const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, data: {captchaUrl}});

export const authUserThunkCreator = () => {
  return async(dispatch) => {
    let response = await getHeader()
      if(response.data.resultCode === 0){
        let {id , email , login } = response.data.data
      dispatch(authUsersData(id , email , login , true))
    }
  }
}  
export const loginThunkCreator = (email , password, rememberMe, captcha) => {
  return async(dispatch) => {
    let response = await login(email , password, rememberMe, captcha)
      if(response.data.resultCode === 0){
      dispatch(authUserThunkCreator())
      } else { 
        if(response.data.resultCode === 10){
          dispatch(captchaUrlThunkCreator())
        }
      let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Some error" 
        dispatch(stopSubmit('login', {_error: messages}))
    }
  }
}
export const captchaUrlThunkCreator = () => {
  return async(dispatch) => {
  let response = await captchaUrlSecurity();
  const captchaUrl = response.data.url
      dispatch(setCaptchaUrl(captchaUrl))
  
  }
}

export const logoutThunkCreator = () => {
  return async(dispatch) => {
  let response = await logout()
      if(response.data.resultCode === 0){
      dispatch(authUsersData(null , null , null, false ))
    }
  }
}

export default authReduser;
