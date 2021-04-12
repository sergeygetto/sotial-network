import { getUserPage } from '../api/api'
import { getUserPageChange , getUnfollow, getFollow} from '../api/api'
import {PhotosType, UsersType} from "../types/Types";


const FOLLOW = "users/FOLLOW";
const UN_FOLLOW = "users/UN-FOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_CURRENT_USERS = "users/SET-CURRENT-USERS";
const SET_USERS_TOTAL_COUNT = "users/SET-USERS-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE-IS-FOLLOWING-PROGRESS";


type InitialStateType = typeof initialState
const initialState = {
users: [] as Array <UsersType>,
pageSize: 100,
totalPage: 0,
currentPage: 1,
isFetching: false,
followingProgress: [] as Array <number>,
    }

export const usersReduser = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
    return {
      ...state,
      users: state.users.map(user => {
          if(user.id === action.usersID){
              return {...user, followed: true}
          }
          return user
      }) 
    
    }
    case UN_FOLLOW:
    return {
      ...state,
        users: state.users.map(user =>{
            if(user.id === action.usersID){
                return {...user, followed: false}
            }
            return user
        })
    }
    case SET_USERS:
      return{
        ...state, users: action.users
      }
    case SET_CURRENT_USERS:
      return{
        ...state, currentPage: action.currentPage
      }
    case SET_USERS_TOTAL_COUNT:
      return{
        ...state, totalPage: action.totalCount
      }
    case TOGGLE_IS_FETCHING:
      return{
        ...state, isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return{
        ...state, followingProgress: action.isFetching ? 
        [...state.followingProgress, action.userID] :
        state.followingProgress.filter(id => id != action.userID)
      }
    default:
      return state;
  }
};
type FollowType = {
    type: typeof FOLLOW
    usersID: number
}
export const follow = (usersID: number):FollowType => ({ type: FOLLOW,  usersID });

type UnFollowType = {
    type: typeof UN_FOLLOW
    usersID: number
}

export const unFollow = (usersID: number): UnFollowType => ({ type: UN_FOLLOW, usersID });

type SetUsersType = {
    type: typeof SET_USERS
    users: UsersType
}
export const setUsers = (users: UsersType): SetUsersType => ({ type: SET_USERS , users });

type SetCurrentType = {
    type: typeof SET_CURRENT_USERS
    currentPage: number
}
export const setCurrent = (currentPage: number) => ({ type: SET_CURRENT_USERS , currentPage });

type SetUsersTotalCountType = {
    type: typeof SET_USERS_TOTAL_COUNT
    totalCount: number
}
export const setUsersTotalCount = (totalCount: number) => ({ type: SET_USERS_TOTAL_COUNT , totalCount });

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING , isFetching });

type ToggleIsFollowingProgress = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userID: number
}
export const toggleIsFollowingProgress = (isFetching: boolean, userID: number) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS , isFetching , userID });

export const getUsersThunkCreator = (currentPage: any , pageSize: any , p: any ) => {
return async(dispatch: any) => {
  dispatch(toggleIsFetching(true))
  let data = await getUserPage(currentPage , pageSize)
    dispatch(toggleIsFetching(false)) 
    dispatch(setUsers(data.items))
    dispatch(setUsersTotalCount(data.totalCount))
    dispatch(setCurrent(currentPage))       
}}
 const  followUnfollowFlow = async(userId: number, dispatch: any ,apiMethod: any, creator: any) => {
  dispatch(toggleIsFollowingProgress(true, userId))
                  let data = await apiMethod(`${userId}`)
                  if(data.resultCode === 0) {
                        dispatch(creator(userId))
                      }
                     dispatch(toggleIsFollowingProgress(false, userId))
}

export const unFollowThunkCreator = (userId:number) => {
  return async(dispatch: any) => {
    let apiMethod = getUnfollow;
    let creator = unFollow;
    followUnfollowFlow(userId, dispatch ,apiMethod, creator)
  } 
}
export const followThunkCreator = (userId:number) => {
  return  async(dispatch: any) => {
    let apiMethod = getFollow;
    let creator = follow
    followUnfollowFlow(userId, dispatch ,apiMethod, creator)   
  } 
}



export default usersReduser;
