import { getUserPage } from '../api/api'
 import { getUserPageChange , getUnfollow, getFollow} from '../api/api'


const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_USERS = "SET-CURRENT-USERS";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";


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
return (dispatch) => {
  dispatch(toggleIsFetching(true))
  getUserPage(currentPage , pageSize).then(data => {
    dispatch(toggleIsFetching(false)) 
    dispatch(setUsers(data.items))
    dispatch(setUsersTotalCount(data.totalCount))
    })
    setCurrent(p)
    dispatch(toggleIsFetching(true))

    getUserPageChange(p , pageSize).then(data => {
      dispatch(toggleIsFetching(false))

      dispatch(setUsers(data.items))
      })
      
}}
export const unFollowThunkCreator = (userId) => {
  return(dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
                    getUnfollow(`${userId}`)
                    .then(data => {
            
                       if(data.resultCode === 0) {
                        dispatch(unFollow(userId))
                      }
                     dispatch(toggleIsFollowingProgress(false, userId))
                    })
  } 
}
export const followThunkCreator = (userId) => {
  return(dispatch) => {
   dispatch(toggleIsFollowingProgress(true, userId))  
  getFollow(`${userId}`)
  .then(data => {
   if(data.resultCode === 0){
    dispatch(follow(userId))
                        }
                        dispatch(toggleIsFollowingProgress(false, userId))
                    })
  } 
}



export default usersReduser;
