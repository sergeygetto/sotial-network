import { getMainProfile , getUsersStatus , updateUsersStatus, savePhotosSuccess, profileUpdateDescription} from '../api/api'
import { stopSubmit } from 'redux-form';


const NEW_POST = "main/NEW-POST";
const SET_USERS_PROFILE = "main/SET-USERS-PROFILE";
const SET_USERS_STATUS = "main/SET-USERS-STATUS";
const SAVE_PHOTOS = "main/SAVE-PHOTOS";

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
    case SAVE_PHOTOS:
    return {
      ...state,
      profile : {...state.profile, photos: action.photos} 
    }

      default:
      return state;
  }
};

export const NewPOST = (addMyPost) => ({ type: NEW_POST, addMyPost });

export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

export const setUsersStatus = (status) => ({ type: SET_USERS_STATUS, status });

export const savePhotosFile = (photos) => ({ type: SAVE_PHOTOS, photos });


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
    try{
    let data = await updateUsersStatus(status)
          if(data.data.resultCode === 0){
            dispatch(setUsersStatus(status))}
  } catch (error){
    alert(error.response.status)
  }
}
} 
export const savePhotosThunkCreator = (photos) => {
  return async(dispatch) => { 
    let data = await savePhotosSuccess(photos)
          if(data.data.resultCode === 0){
            dispatch(savePhotosFile(data.data.data.photos))}
  }
} 
export const profileDescriptionThunkCreator = (profile ) => {
  return async(dispatch, getState) => {
    const userID = getState().auth.id 
    let data = await profileUpdateDescription(profile)
          if(data.data.resultCode === 0){
            dispatch(userProfileThunkCreator(userID))}
            else{ 
               // let messages = data.data.messages.length > 0 ? data.data.messages[0] : "Some error" 
                  dispatch(stopSubmit('profile', {_error:  data.data.messages[0]}))
                return Promise.reject(data.data.messages[0])
            }
  }
} 

export default mainReduser;
