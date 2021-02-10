import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxFieldLengthCreator, requiredFieldValidationForm } from '../../../utilits/validation'
import { Textarea } from '../../common/FormsControls/FormsControls'
import el from './MyPost.module.css'
import Post from './Post/Post'
  
const MyPost = React.memo (props =>{
let myPost = props.posts.map(m => <Post key={m.like}  messages = {m.messages} like = {m.like} /> )

const onSubmitNewPost = (values) =>{
  props.NewPOST(values.addMyPost) 
}
return( <>
<div> My post
  
    <AddMyPostReduxForm onSubmit={onSubmitNewPost} />
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
  <Field placeholder={'What?'} name={'addMyPost'}  component={Textarea}  validate={[requiredFieldValidationForm, maxLength12 ]}  className={el.post} /> </div>
  <button className={el.button} >Write post </button>
</form>

)
}
const AddMyPostReduxForm = reduxForm({
  form: "addNewMyPost"
})(MyPostForm)

export default MyPost