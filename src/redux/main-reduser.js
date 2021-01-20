import { getMainProfile , getUsersStatus , updateUsersStatus} from '../api/api'


const NEW_POST = "NEW-POST";
const CHANGE_TEXT = "CHANGE-TEXT";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";
const SET_USERS_STATUS = "SET-USERS-STATUS";


const initialState = {
 posts: [
        { id: 1, messages: "My first post", like: "37" },
        { id: 1, messages: "Hi, my name is Serg", like: "27" },
        { id: 1, messages: "REACT JS", like: "17" },
      ],
      initialText: "what?",
      profile: null,
      status: ""
    }

export const mainReduser = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST:
    return {
      ...state, 
      initialText : "",
      posts: [{id: 4,messages: state.initialText,like: "51"}, ...state.posts ]
    }
    case CHANGE_TEXT:
    return {
      ...state,
      initialText : action.update
    }
    case SET_USERS_PROFILE:
    return {
      ...state,
      profile : action.profile
    }
    case SET_USERS_STATUS:
    return {
      ...state,
      status : action.status
    }

    default:
      return state;
  }
};

export const NewPOST = () => ({ type: NEW_POST });

export const ChangeTEXT = (text) => ({ type: CHANGE_TEXT, update: text });

export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

export const setUsersStatus = (status) => ({ type: SET_USERS_STATUS, status });


export const userProfileThunkCreator = (userID) => {
  return (dispatch) => {  
        let u = `${userID}`
        getMainProfile(u)
        .then(data => {
          
          dispatch(setUsersProfile(data))
    })
  }
} 
export const getUserStatusThunkCreator = (userID) => {
  return (dispatch) => {  
    getUsersStatus(userID)
        .then(data => {
          // debugger;
          dispatch(setUsersStatus(data.data))
    })
  }
} 

export const updateUserStatusThunkCreator = (status) => {
  
  return (dispatch) => { 
     
    updateUsersStatus(status)
        .then(data => {
          if(data.data.resultCode === 0){
            dispatch(setUsersStatus(status))}
    })
  }
} 

export default mainReduser;
