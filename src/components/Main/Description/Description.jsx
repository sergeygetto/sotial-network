import React from 'react'
import Loading from '../../common/loading/Loading'
import el from './Description.module.css'
import yes from './../../../assets/images/yes.jpg'
import no from './../../../assets/images/no.jpg'
import avatar from './../../../assets/images/avatar.jpg'


const Description =(props) => {

    if(!props.profile){
      return  <div><Loading/> </div>
    }

return(<>
     <div className={el.main}>
    <header> <img src='https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg'></img></header>  
    
    <div className={el.description}>
    {props.profile.photos.large == null ? <img src={avatar} /> :  <img src={props.profile.photos.large} />}  
    <div className={el.name}> {props.profile.fullName} </div>
    <div className={el.about}>
       <span> aboutMe: </span> <br/>
     {props.profile.aboutMe === null ? 'пока тут нет информации' : props.profile.aboutMe  }
    </div>
    <div className={el.contacts}>
    <span className={el.contactsSpan}> contacts: </span> <br/>
        {props.profile.contacts.facebook === null ? 'пока тут нет контактов' : <div>
        <span>{props.profile.contacts.facebook}</span> <br/>
        <span>{props.profile.contacts.vk}</span> <br/>
        <span>{props.profile.contacts.twitter}</span> <br/> 
        <span>{props.profile.contacts.instagram}</span> </div> 
        }
        
    </div>
    <div className={el.job}>
    lookingForAJob  
    { props.profile.lookingForAJob ? <img src={yes}/> : <img src={no}/>
       }
    </div>
    
        </div>
</div>
</>
)


}




export default Description