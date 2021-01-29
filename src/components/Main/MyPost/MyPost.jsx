import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxFieldLengthCreator, requiredFieldValidationForm } from '../../../utilits/validation'
import { Textarea } from '../../common/FormsControls/FormsControls'
import el from './MyPost.module.css'
import Post from './Post/Post'
  
const MyPost = React.memo (props =>{
let myPost = props.posts.map(m => <Post  messages = {m.messages} like = {m.like} /> )

const onSubmitNewPost = (values) =>{
  props.NewPOST(values.addMyPost) 
}
return( <>
<div> My post
  
    <AddMyPostForm onSubmit={onSubmitNewPost} />
    </div>
    { myPost }
    </>
)
})

const maxLength12 = maxFieldLengthCreator(12)

const MyPostForm =  (props) => {
return(
<form onSubmit={props.handleSubmit}>
<div>
  <Field component={Textarea } name={'addMyPost'} placeholder={'What?'}   validate={[requiredFieldValidationForm, maxLength12 ]}  className={el.post} /> <br />
     <button className={el.button} >Write post </button>
     </div>
</form>

)
}
const AddMyPostForm = reduxForm({
  form: "addNewMyPost"
})(MyPostForm)

export default MyPost