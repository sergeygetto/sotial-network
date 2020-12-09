import React from 'react'
import el from './../Dialogs.module.css'


const MessagesElem =(props) =>{
    return(
    <div className={el.messages}> {props.messages} </div>

    )
}


export default MessagesElem