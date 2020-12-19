import { connect } from "react-redux";
import {followAC, unFollowAC, setUsersAC, setCurrentAC, setUsersTotalCountAC, toggleIsFetchingAC} from './../../redux/users-reduser'
import Users from './Users'
import React from 'react'
import *as axios from 'axios'
import loading from './../../assets/images/Double Ring.svg'





class UsersAPI extends React.Component  {
  
  
  componentDidMount(){
    this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.toggleIsFetching(false)    
      this.props.setUsers(response.data.items)
      this.props.setUsersTotalCount(response.data.totalCount)
          
      })

  }
  onPageChanged = (p) =>{
      this.props.setCurrent(p)
    this.props.toggleIsFetching(true)

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
        this.props.toggleIsFetching(false)

      this.props.setUsers(response.data.items)
      })
  }
 
render () {
  return  <>
    {  this.props.isFetching ? <img src={loading}/> : null } 
  <Users  
  totalPage={this.props.totalPage}
  pageSize={this.props.pageSize}
  currentPage={this.props.currentPage}
  onPageChanged={this.onPageChanged}
  users={this.props.users}
  follow={this.props.follow}
  unFollow={this.props.unFollow}
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
    isFetching: state.usersPage.isFetching
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    follow : (usersID) => { 
    let action = followAC(usersID)
    dispatch(action)},
    unFollow : (usersID) => dispatch(unFollowAC(usersID)),
    setUsers: (users) => dispatch(setUsersAC(users)), 
    setCurrent: (currentPage) => dispatch(setCurrentAC(currentPage)), 
    setUsersTotalCount: (totalCount) => dispatch(setUsersTotalCountAC(totalCount)),
    toggleIsFetching: (isFetching)=> dispatch(toggleIsFetchingAC(isFetching))
  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer;

