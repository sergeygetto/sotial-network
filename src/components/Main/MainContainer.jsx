import *as axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Main from './Main'
import { setUsersProfile } from './../../redux/main-reduser'
import { withRouter } from 'react-router-dom'
import { getMainProfile } from '../../api/api'

class MainContainer extends React.Component {

componentDidMount() {
    // debugger
    let userID = this.props.match.params.userID
    if (!userID){
     userID = 2
    }  
    let u = `${userID}`
    getMainProfile(u)
    .then(data => {
      this.props.setUsersProfile(data)
})
}

render() {    
return ( <> 

<article>
     
<Main {...this.props} profile ={this.props.profile}/>

     </article>
</>
)
}
}
const mapStateToProps = (state) => {
    return{
    profile: state.mainPage.profile
    }
}
let WithUserContainerComponent = withRouter(MainContainer)

export default connect(mapStateToProps, {setUsersProfile})(WithUserContainerComponent)

 

// posts={props.state.posts} dispatch={props.dispatch} initialText={props.state.initialText}  store={props.store} 