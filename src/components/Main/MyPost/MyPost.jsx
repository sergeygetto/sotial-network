import React from 'react'
import el from './MyPost.module.css'
import Post from './Post/Post'
  
const MyPost = (props) =>{
let myPost = props.posts.map(m => <Post  messages = {m.messages} like = {m.like} /> )

let newPost = React.createRef();

let onAddPost = () =>{
  props.NewPOST();
  
}
let onUpdateText = () => {
let text =  newPost.current.value
    props.ChangeTEXT(text);
}

return( <>
<div> My post
    <div><textarea onChange={onUpdateText} ref={newPost} className={el.post} value={props.initialText}/> <br />
     <button className={el.button} onClick = { onAddPost }>Write post </button>
     </div>
    </div>
    { myPost }
    
    </>
)
}

export default MyPost