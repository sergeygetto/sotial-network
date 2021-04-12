
import React from 'react'
import { connect } from 'react-redux'
import Main from './Main'
import { userProfileThunkCreator, updateUserStatusThunkCreator, getUserStatusThunkCreator, savePhotosThunkCreator, profileDescriptionThunkCreator } from '../../redux/main-reduser'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'
// import { getMainProfile } from '../../api/api'

class MainContainer extends React.Component {


refreshComponent () {
    let userID = this.props.match.params.userID
    if (!userID){
             userID = this.props.autorizedId
             if (!userID){
                 this.props.histopy.push('/login')
             }
            }  
    this.props.userProfileThunkCreator(userID)
    this.props.getUserStatusThunkCreator(userID)
}    
componentDidMount() {
    this.refreshComponent()
}
componentDidUpdate(prevProps, prevState) {

   if( this.props.match.params.userID != prevProps.match.params.userID) {
    this.refreshComponent()
   }
}


render() { 

    
return ( <> 

<article>
     
<Main {...this.props} profile ={this.props.profile} status={this.props.status} 
updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator} savePhotosThunkCreator={this.props.savePhotosThunkCreator} isOwner={!this.props.match.params.userID} profileDescriptionThunkCreator={this.props.profileDescriptionThunkCreator} />

     </article>
</>
)
}
}

const mapStateToProps = (state) => {
    return{
    profile: state.mainPage.profile,
    status: state.mainPage.status,
    autorizedId: state.auth.id
    }
}
export default compose(
    connect(mapStateToProps, { userProfileThunkCreator, updateUserStatusThunkCreator , getUserStatusThunkCreator,savePhotosThunkCreator, profileDescriptionThunkCreator}),
    withRouter,
    withAuthRedirect
    
)(MainContainer)
// withAuthRedirect