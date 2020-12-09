import React from 'react'
import el from './MyPost.module.css'
import Post from './Post/Post'
import {NewPOST , ChangeTEXT} from '../../../redux/main-reduser'
// import {ChangeTEXT} from '../../../redux/state'
  
const MyPost = (props) =>{

let myPost = props.posts.map(m => <Post  messages = {m.messages} like = {m.like} /> )

let newPost = React.createRef();
let addPost = () =>{
  props.dispatch(NewPOST());
//   props.changeText('')
  
}
let updateText = () => {
let text =  newPost.current.value
//   debugger
    props.dispatch(ChangeTEXT(text));
}

return( <>
<div> My post
    <div><textarea onChange={updateText} ref={newPost} className={el.post} value={props.initialText}/> <br />
     <button className={el.button} onClick = { addPost }>Write post </button>
     </div>
    </div>
    { myPost }
    
    </>
)
}

export default MyPost