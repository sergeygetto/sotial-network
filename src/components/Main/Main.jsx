import React from 'react'
import Description from './Description/Description'
import MyPostContainer from './MyPost/MyPostContainer'


const Main =(props)=>{
return ( <> 

<article>

    <Description profile = {props.profile}/>
    <MyPostContainer   />

     </article>
</>
)
}

export default Main

// posts={props.state.posts} dispatch={props.dispatch} initialText={props.state.initialText}  store={props.store} 