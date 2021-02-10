import React from 'react'
import Loading from '../../common/loading/Loading'
import el from './Description.module.css'
import yes from './../../../assets/images/yes.jpg'
import no from './../../../assets/images/no.jpg'
import avatar from './../../../assets/images/avatar.jpg'
// import DescriptionStatus from './DescriptionStatus'
import DescriptionStatusHooks from './DescriptionStatusHooks'
import { useState } from 'react'
import ProfileDataForm from './ProfileDataForm'


const Description =(props) => {
  let [editMode , setEditMode] = useState(false)

    if(!props.profile){
      return  <div><Loading/> </div>
    }
    const savePhoto = (e) =>{
      if(e.target.files.length){
     props.savePhotosThunkCreator(e.target.files[0])}
    }
    const onSubmit = (formData) => {
      props.profileDescriptionThunkCreator(formData)
      .then( ()=>{
        setEditMode(false)
      })
    }
    

    
return(<>
     <div className={el.main}>
    {/* <header> <img src='https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg'></img></header>   */}
    <div className={el.description}><div>
    {props.profile.photos.large == null ? <img src={avatar} /> :  <img src={props.profile.photos.large} />} 
    {props.isOwner && <input type={"file"} onChange={savePhoto}></input>} </div>
    <div> <b>Status:</b> <DescriptionStatusHooks status={props.status} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator} /> </div> 
    
    { editMode 
    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} /> 
    : <ProfileData goToEditMode={()=> {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/> }
        </div>
        
</div>
</>
)
}
 const Contacts = ({contactsTitle, contactsValue}) => {
  return <div><b>{contactsTitle}</b>: {contactsValue} </div> 
}

const ProfileData = (props) => {
return <>
{props.isOwner && <div> <button onClick={props.goToEditMode}> edit </button> </div>}
 <div className={el.name}> {props.profile.fullName} </div>    
<div className={el.about}>
   <span> <b> aboutMe: </b> </span> 
 {props.profile.aboutMe === null ? 'пока тут нет информации' : props.profile.aboutMe  }
</div>
<div>
<b>Contacts:</b> {Object.keys(props.profile.contacts).map(key =>{
  return <Contacts key={key} contactsTitle={key} contactsValue={props.profile.contacts[key]} />
}) 
}
</div>
<div className={el.job}>
<b> lookingForAJob </b> 
{ props.profile.lookingForAJob ? <img src={yes}/> : <img src={no}/> }

</div>
<div className={el.job}>
<b> lookingForAJobDescription: </b>
{ props.profile.lookingForAJobDescription  } </div>
</>
}


export default Description