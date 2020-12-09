import React from 'react'
import el from './Post.module.css'


const Post = (props) =>{

return( 
<div className={el.item}>
<img src="https://image.freepik.com/free-vector/vector-avatar-smiling-man-facial-expression_102172-203.jpg" alt="avatar"/> {props.messages}
<div>
<span>{props.like}	&#10084;</span>
    
</div>
</div>
)
}

export default Post