import React from 'react'
import el from './Description.module.css'
import yes from './../../../assets/images/yes.jpg'
import no from './../../../assets/images/no.jpg'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/FormsControls/FormsControls'
import er from '../../common/FormsControls/FormsControls.module.css'


const ProfileDataForm = (props) => {
    return <>
    <form  onSubmit={props.handleSubmit} >
 <button 
 > save </button> 
 <div className={el.name}> {props.profile.fullName} </div>
 {props.error && <div className={er.authError}> {props.error}</div>}
 <div> <Field placeholder={"fullname"} name={"fullName"} component={Input} /> </div>    
<div className={el.about}>
   <span> <b> aboutMe: </b> </span> 
 {props.profile.aboutMe === null ? 'пока тут нет информации' : props.profile.aboutMe  }</div>
 <div> <Field placeholder={"about me"} name={"aboutMe"} component={Textarea} /> </div>
<div>
<b>Contacts:</b> {Object.keys(props.profile.contacts).map(key =>{
  return  <div key={key}><b>{key}: <Field placeholder={key} name={"contacts."+key} component={Input} /> </b>  </div> 
}) 
}
</div>
<div className={el.job}>
<b> lookingForAJob: </b>
{ props.profile.lookingForAJob ? <img src={yes}/> : <img src={no}/> } </div>
<div> <Field placeholder='' name={"lookingForAJob"} component={Input} type="checkbox"  /> </div>

<div className={el.job}>
<b> My professional skills: </b> 
{ props.profile.lookingForAJobDescription  } </div>
<div> <Field placeholder='My professional skills' name={"lookingForAJobDescription"} component={Textarea}  /> </div>




</form>
</>
    }
    const ProfileDataReduxForm = reduxForm({form: 'profile'})(ProfileDataForm)

    export default ProfileDataReduxForm