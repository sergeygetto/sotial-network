import { getUserPage } from '../api/api'
import { getUserPageChange , getUnfollow, getFollow} from '../api/api'


const FOLLOW = "users/FOLLOW";
const UN_FOLLOW = "users/UN-FOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_CURRENT_USERS = "users/SET-CURRENT-USERS";
const SET_USERS_TOTAL_COUNT = "users/SET-USERS-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE-IS-FOLLOWING-PROGRESS";


const initialState = {
users: [ ],
pageSize: 100,
totalPage: 0,
currentPage: 1,
isFetching: false,
followingProgress: [],
    }

export const usersReduser = (state = initialState, action) => {
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

export const follow = (usersID) => ({ type: FOLLOW,  usersID });

export const unFollow = (usersID) => ({ type: UN_FOLLOW, usersID });

export const setUsers = (users) => ({ type: SET_USERS , users });

export const setCurrent = (currentPage) => ({ type: SET_CURRENT_USERS , currentPage });

export const setUsersTotalCount = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT , totalCount });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING , isFetching });

export const toggleIsFollowingProgress = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS , isFetching , userID });

export const getUsersThunkCreator = (currentPage , pageSize , p ) => {
return async(dispatch) => {
  dispatch(toggleIsFetching(true))
  let data = await getUserPage(currentPage , pageSize)
    dispatch(toggleIsFetching(false)) 
    dispatch(setUsers(data.items))
    dispatch(setUsersTotalCount(data.totalCount))
    dispatch(setCurrent(currentPage))       
}}
 const  followUnfollowFlow = async(userId, dispatch ,apiMethod, creator) => {
  dispatch(toggleIsFollowingProgress(true, userId))
                  let data = await apiMethod(`${userId}`)
                  if(data.resultCode === 0) {
                        dispatch(creator(userId))
                      }
                     dispatch(toggleIsFollowingProgress(false, userId))
}

export const unFollowThunkCreator = (userId) => {
  return async(dispatch) => {
    let apiMethod = getUnfollow;
    let creator = unFollow;
    followUnfollowFlow(userId, dispatch ,apiMethod, creator)
  } 
}
export const followThunkCreator = (userId) => {
  return  async(dispatch) => {
    let apiMethod = getFollow;
    let creator = follow
    followUnfollowFlow(userId, dispatch ,apiMethod, creator)   
  } 
}



export default usersReduser;
