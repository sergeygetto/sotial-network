import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import {  authUserThunkCreator } from '../../redux/auth-reduser'
// import { getHeader } from '../../api/api';
 
class HeaderContainer extends React.Component {
  componentDidMount (){
    this.props.authUserThunkCreator()
    // debugger;
    // getHeader()
    // .then(data => {
    //   if(data.resultCode === 0){
    //     let {id , email , login} = data.data
    //   this.props.authUsersData(id , email , login)
    // }})
  } 

  render(){
    return (
      <Header {...this.props} />
    )

  }
   }

const mapStateToProps = (state) => {
  return{
    isAuth: state.auth.isAuth,
    email: state.auth.email
  }
}

export default connect(mapStateToProps , {authUserThunkCreator})(HeaderContainer)