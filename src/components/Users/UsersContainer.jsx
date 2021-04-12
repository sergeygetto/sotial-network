import { connect } from "react-redux";
import {follow, unFollow, setUsers, setCurrent, setUsersTotalCount, toggleIsFetching , toggleIsFollowingProgress,getUsersThunkCreator, followThunkCreator , unFollowThunkCreator} from '../../redux/users-reduser'
import Users from './Users'
import React from 'react'
import Loading from "../common/loading/Loading";
import { getUsers,getPageSize,getTotalPage,getCurrentPage,getIsFetching, getFollowingProgress} from "../../redux/users-selectors";



class UsersAPI extends React.Component  {
  
  
  componentDidMount(){
   
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
    // getUserPage(this.props.currentPage, this.props.pageSize).then(data => {
    //   this.props.toggleIsFetching(false)    
    //   this.props.setUsers(data.items)
    //   this.props.setUsersTotalCount(data.totalCount)
    //   })
  }
  onPageChanged = (p) =>{
    this.props.getUsersThunkCreator(p, this.props.pageSize)
  
    //   this.props.setCurrent(p)
    // this.props.toggleIsFetching(true)

    // getUserPageChange(p , this.props.pageSize).then(data => {
    //     this.props.toggleIsFetching(false)

    //   this.props.setUsers(data.items)
    //   })
  }
 
render () {
  return  <>
    {  this.props.isFetching ? <Loading />  : null } 
  <Users  
  totalPage={this.props.totalPage}
  pageSize={this.props.pageSize}
  currentPage={this.props.currentPage}
  onPageChanged={this.onPageChanged}
  users={this.props.users}
  followingProgress={this.props.followingProgress}
  followThunkCreator={this.props.followThunkCreator}
  unFollowThunkCreator={this.props.unFollowThunkCreator}
  />
  </>
  
}
}

const mapStateToProps = (state)  => {

    return {
    users : getUsers(state),
    pageSize: getPageSize(state),
    totalPage: getTotalPage(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state)
  }
}

const UsersContainer = connect(mapStateToProps, {
        follow ,
        unFollow ,
        setUsers, 
        setCurrent, 
        setUsersTotalCount,
        toggleIsFetching,
        toggleIsFollowingProgress,
        getUsersThunkCreator,
        followThunkCreator,
        unFollowThunkCreator
})(UsersAPI)

export default UsersContainer;




// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow : (usersID) => { 
//     let action = followAC(usersID)
//     dispatch(action)},
//     unFollow : (usersID) => dispatch(unFollowAC(usersID)),
//     setUsers: (users) => dispatch(setUsersAC(users)), 
//     setCurrent: (currentPage) => dispatch(setCurrentAC(currentPage)), 
//     setUsersTotalCount: (totalCount) => dispatch(setUsersTotalCountAC(totalCount)),
//     toggleIsFetching: (isFetching)=> dispatch(toggleIsFetchingAC(isFetching))
//   }
// }