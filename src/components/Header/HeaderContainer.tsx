import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { logoutThunkCreator } from '../../redux/auth-reduser'
import { AppStateType } from '../../redux/redux-store';
// import { getHeader } from '../../api/api';
 
class HeaderContainer extends React.Component {
   
  render(){
    return (
      //@ts-ignore
      <Header {...this.props} />
    )
  }
  }

const mapStateToProps = (state: AppStateType) => {
  return{
    isAuth: state.auth.isAuth,
    email: state.auth.email
  }
}

export default connect(mapStateToProps , { logoutThunkCreator})(HeaderContainer)