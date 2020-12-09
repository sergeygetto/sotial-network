import React from 'react'
import Description from './Description/Description'
import el from './Main.module.css'
import MyPost from './MyPost/MyPost'


const Main =(props)=>{
return ( <> 

<article> 
    <Description />
    
    <MyPost posts={props.state.posts} dispatch={props.dispatch} initialText={props.state.initialText}  />
     </article>
</>
)
}

export default Main