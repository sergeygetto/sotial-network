import { getMainProfile , getUsersStatus , updateUsersStatus} from '../api/api'


const NEW_POST = "main/NEW-POST";
const SET_USERS_PROFILE = "main/SET-USERS-PROFILE";
const SET_USERS_STATUS = "main/SET-USERS-STATUS";


const initialState = {
 posts: [
        { id: 1, messages: "My first post", like: "37" },
        { id: 1, messages: "Hi, my name is Serg", like: "27" },
        { id: 1, messages: "REACT JS", like: "17" },
      ],
      profile: null,
      status: ""
    }

export const mainReduser = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST:
    return {
      ...state, 
      posts: [{id: 4,messages: action.addMyPost, like: "51"}, ...state.posts ]
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

export const NewPOST = (addMyPost) => ({ type: NEW_POST, addMyPost });

export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

export const setUsersStatus = (status) => ({ type: SET_USERS_STATUS, status });


export const userProfileThunkCreator = (userID) => {
  return async(dispatch) => {  
        let u = `${userID}`
       let data = await getMainProfile(u)
          dispatch(setUsersProfile(data))
  }
} 
export const getUserStatusThunkCreator = (userID) => {
  return async(dispatch) => {  
    let data = await getUsersStatus(userID)
            dispatch(setUsersStatus(data.data))
  }
} 

export const updateUserStatusThunkCreator = (status) => {
  return async(dispatch) => { 
    let data = await updateUsersStatus(status)
          if(data.data.resultCode === 0){
            dispatch(setUsersStatus(status))}
  }
} 

export default mainReduser;
