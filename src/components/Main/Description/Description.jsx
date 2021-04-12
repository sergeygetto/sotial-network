import React from 'react'
import Loading from '../../common/loading/Loading'
import el from './Description.module.css'
import yes from './../../../assets/images/yes.svg'
import no from './../../../assets/images/no.svg'
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
    {props.profile.photos.large == null ? <img style={{minHeight: '270px'}} src={avatar} /> :  <img src={props.profile.photos.large} />} 
    {props.isOwner && 
      <div className={el.inputFile}>
      <label>file
    <input className={el.flInp} type={"file"} id={el.flInput} name={"file"} onChange={savePhoto}></input></label>
</div>}
     </div>
    <div className={el.status}> <b>Status:</b> <DescriptionStatusHooks status={props.status} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator} /> </div> 
    
    { editMode 
    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} /> 
    : <ProfileData goToEditMode={()=> {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/> }
        </div>
</div>
</>
)
}
 const Contacts = ({contactsTitle, contactsValue}) => {
  return <div style={{paddingLeft: '10px'}}><b>{contactsTitle}</b>: {contactsValue} </div> 
}

const ProfileData = (props) => {
return <>
{props.isOwner && <div> <button className={el.buttonEdit} onClick={props.goToEditMode}> edit </button> </div>}
 <div className={el.name}> {props.profile.fullName} </div>    
<div className={el.about}>
   <span> <b> about Me: </b> </span> 
 {props.profile.aboutMe === null ? 'пока тут нет информации' : props.profile.aboutMe  }
</div>
<div className={el.contacts}>
 <span><b>Contacts:</b> </span> {Object.keys(props.profile.contacts).map(key =>{
  return <Contacts  key={key} contactsTitle={key} contactsValue={props.profile.contacts[key]} />
}) 
}
</div>
<div className={el.desJob}>
<div className={el.job}>
<b> Looking For A Job </b> 
{ props.profile.lookingForAJob ? <img src={yes}/> : <img src={no}/> }

</div>
<div className={el.job}>
<b> My skills and abilities: </b>
{ props.profile.lookingForAJobDescription  } </div>
</div>
</>
}


export default Description