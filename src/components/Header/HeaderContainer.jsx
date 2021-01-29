import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { logoutThunkCreator } from '../../redux/auth-reduser'
// import { getHeader } from '../../api/api';
 
class HeaderContainer extends React.Component {
   
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

export default connect(mapStateToProps , { logoutThunkCreator})(HeaderContainer)