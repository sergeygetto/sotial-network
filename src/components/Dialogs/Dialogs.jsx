import React from 'react'
import DialogElem from './DialogElem/DialogElem'
import el from './Dialogs.module.css'
import MessagesElem from './MessagesElem/MessagesElem'
import {changeNewMessagesText , sendNewMessages} from '../../redux/dialogs-reduser'


const Dialogs = (props) =>{
    
    let dialogsItem = props.dialogs.map(elem => 
    <DialogElem name = {elem.name} id = {elem.id} img = {elem.img} /> );

    let messagesItem = props.messages.map(elem =>
         <MessagesElem  messages = {elem.messages} /> )

    let changeNewMessagesTEXT = (e) => {
        let body = e.target.value
    props.dispatch(changeNewMessagesText(body))
    } 
    let sendNewMESSAGES = () => {
       props.dispatch(sendNewMessages()) 
    }  

return(
<>
<div className={el.dialogs}>
    <div className="dialogElem">
        {dialogsItem}
    
        </div>
    <div className="messagesElem">
    { messagesItem }
    <div>
         <div> <textarea onChange={changeNewMessagesTEXT} value={props.initialMessagesText}
         placeholder = 'send message' ></textarea> </div>
         <div> <button onClick={ sendNewMESSAGES}>Send</button> </div>
        </div>
    </div>
        
</div>
</>

)


} 
export default Dialogs