import { getMainProfile , getUsersStatus , updateUsersStatus, savePhotosSuccess, profileUpdateDescription} from '../api/api'
import { stopSubmit } from 'redux-form';
import {PhotosType, PostsType, ProfileType} from "../types/Types";


const NEW_POST = "main/NEW-POST";
const SET_USERS_PROFILE = "main/SET-USERS-PROFILE";
const SET_USERS_STATUS = "main/SET-USERS-STATUS";
const SAVE_PHOTOS = "main/SAVE-PHOTOS";


type InitialStateType= {
    posts: Array<PostsType>
    profile: ProfileType | null
    status: ""
}
const initialState: InitialStateType = {
 posts: [
        { id: 1, messages: "My first post", like: "37" },
        { id: 1, messages: "Hi, my name is Serg", like: "27" },
        { id: 1, messages: "REACT JS", like: "17" },
      ],
      profile: null as ProfileType | null ,
      status: ""
    }
    // type InitialState = typeof initialState

export const mainReduser = (state = initialState, action:any):InitialStateType => {
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
      profile: {...state.profile, photos: action.photos} as ProfileType
    }

      default:
      return state;
  }
};
type NewPOSTType = {
    type: typeof NEW_POST
    addMyPost: string
}
export const NewPOST = (addMyPost: string): NewPOSTType => ({ type: NEW_POST, addMyPost });

type SetUsersProfileType = {
    type: typeof SET_USERS_PROFILE
    profile: ProfileType
}
export const setUsersProfile = (profile: ProfileType): SetUsersProfileType => ({ type: SET_USERS_PROFILE, profile });

type SetUsersStatusType = {
   type: typeof SET_USERS_STATUS
    status: string
}
export const setUsersStatus = (status: string): SetUsersStatusType => ({ type: SET_USERS_STATUS, status });

type SavePhotosFileType = {
   type: typeof SAVE_PHOTOS
    photos: PhotosType
}
export const savePhotosFile = (photos: PhotosType): SavePhotosFileType => ({ type: SAVE_PHOTOS, photos });


export const userProfileThunkCreator = (userID: number) => {
  return async(dispatch: any) => {
        let u = `${userID}`
       let data = await getMainProfile(u)
          dispatch(setUsersProfile(data))
  }
} 
export const getUserStatusThunkCreator = (userID: number) => {
  return async(dispatch: any) => {
    let data = await getUsersStatus(userID)
            dispatch(setUsersStatus(data.data))
  }
} 

export const updateUserStatusThunkCreator = (status: string) => {
  return async(dispatch: any) => {
    try{
    let data = await updateUsersStatus(status)
          if(data.data.resultCode === 0){
            dispatch(setUsersStatus(status))}
  } catch (error){
    alert(error.response.status)
  }
}
} 
export const savePhotosThunkCreator = (photos: any) => {
  return async(dispatch: any) => {
    let data = await savePhotosSuccess(photos)
          if(data.data.resultCode === 0){
            dispatch(savePhotosFile(data.data.data.photos))}
  }
} 
export const profileDescriptionThunkCreator = (profile: ProfileType ) => {
  return async(dispatch:any, getState:any) => {
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
