 import { getHeader } from '../api/api';


const AUTH_USERS_DATA = "AUTH-USERS-COMPONENT";



const initialState = {
id: null,
email: null,
login: null,
isAuth: false
    }

export const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USERS_DATA:
    return {
      ...state, 
      ...action.data,
      isAuth: true
    }
    default:
      return state;
  }
};


export const authUsersData = (id , email , login) => ({ type: AUTH_USERS_DATA, data: {id , email , login} });

export const authUserThunkCreator = () => {
  return (dispatch) => {
    getHeader()
    .then(data => {
      if(data.resultCode === 0){
        let {id , email , login} = data.data
      dispatch(authUsersData(id , email , login))
    }})
  }
}

export default authReduser;
