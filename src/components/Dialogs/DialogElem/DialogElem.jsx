import React from 'react'
import { NavLink } from 'react-router-dom'
import el from './../Dialogs.module.css'


const DialogElem = (props) =>{
// let newRefs = React.createRef();
// let newAlert =() =>{
// alert( newRefs.current.value)    
//}

    return(
    <div className={el.elem}> <NavLink to={'/dialogs/' + props.id } activeClassName={el.active} >
        <img className ={el.avatar} src={props.img} /> {props.name}   </NavLink> 
    
    </div> 
    
    )
}


export default DialogElem