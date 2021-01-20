
import React from 'react'
import { connect } from 'react-redux'
import Main from './Main'
import { userProfileThunkCreator, updateUserStatusThunkCreator, getUserStatusThunkCreator } from './../../redux/main-reduser'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'
// import { getMainProfile } from '../../api/api'

class MainContainer extends React.Component {
    debbuger;

componentDidMount() {
    let userID = this.props.match.params.userID
    if (!userID){
             userID = 13348
            }  
    this.props.userProfileThunkCreator(userID)
    this.props.getUserStatusThunkCreator(userID)
 

}


render() { 

    
return ( <> 

<article>
     
<Main {...this.props} profile ={this.props.profile} status={this.props.status} 
updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator} />

     </article>
</>
)
}
}

const mapStateToProps = (state) => {
    return{
    profile: state.mainPage.profile,
    status: state.mainPage.status,
    }
}
export default compose(
    connect(mapStateToProps, { userProfileThunkCreator, updateUserStatusThunkCreator , getUserStatusThunkCreator}),
    withRouter,
    
)(MainContainer)
// withAuthRedirect