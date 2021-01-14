import { connect } from "react-redux";
import {follow, unFollow, setUsers, setCurrent, setUsersTotalCount, toggleIsFetching , toggleIsFollowingProgress,getUsersThunkCreator, followThunkCreator , unFollowThunkCreator} from './../../redux/users-reduser'
import Users from './Users'
import React from 'react'
import Loading from "../common/loading/Loading";
// import { getUserPage } from './../../api/api'
// import { getUserPageChange } from './../../api/api'


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
  // follow={this.props.follow}
  // unFollow={this.props.unFollow}
  followingProgress={this.props.followingProgress}
  // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress }
  followThunkCreator={this.props.followThunkCreator}
  unFollowThunkCreator={this.props.unFollowThunkCreator}
  />
  </>
  
}
}

const mapStateToProps = (state)  => {

    return {
    users : state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalPage: state.usersPage.totalPage,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
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