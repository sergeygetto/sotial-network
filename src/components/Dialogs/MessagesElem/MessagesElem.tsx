import React from 'react'
import el from './../Dialogs.module.css'

type PropsType = {
    messages: string
}

const MessagesElem =(props: PropsType) =>{
    return(
    <div className={el.messages}> {props.messages} </div>

    )
}


export default MessagesElem