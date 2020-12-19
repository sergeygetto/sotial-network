const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_USERS = "SET-CURRENT-USERS";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";


const initialState = {
users: [ ],
pageSize: 100,
totalPage: 2,
currentPage: 1,
isFetching: false,
     
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
    default:
      return state;
  }
};

export const followAC = (usersID) => ({ type: FOLLOW,  usersID });

export const unFollowAC = (usersID) => ({ type: UN_FOLLOW, usersID });

export const setUsersAC = (users) => ({ type: SET_USERS , users });

export const setCurrentAC = (currentPage) => ({ type: SET_CURRENT_USERS , currentPage });

export const setUsersTotalCountAC = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT , totalCount });

export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING , isFetching });

export default usersReduser;
