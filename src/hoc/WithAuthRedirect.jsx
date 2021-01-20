
import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

const mapStateToPropsRedirect = (state)  => {
    return {
      isAuth: state.auth.isAuth
    }
  }

export let withAuthRedirect = (Components) => {

class AuthComponents extends React.Component{
    render(){
    if(!this.props.isAuth) return <Redirect to = '/login'/>
        return <Components {...this.props} />
    }
}
const connectedAuthComponentsRedirect = connect(mapStateToPropsRedirect)(AuthComponents)

return  connectedAuthComponentsRedirect 

}