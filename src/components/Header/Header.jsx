import React from 'react'
import logo from '../../logo.jpg';
import el from'./Header.module.css'
import { NavLink } from 'react-router-dom'



const Header =(props) =>{
    return <header className={el.header}>
         <img src={logo}></img>

         <div className={el.auth}>
           {props.isAuth ? props.email: <NavLink to='/login'>Login</NavLink>  }
           
           </div>  
       </header>
       
}



export default Header