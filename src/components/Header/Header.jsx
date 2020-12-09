import React from 'react'
import logo from '../../logo.jpg';
import el from'./Header.module.css'

const Header =() =>{
    return <header className={el.header}>
         <img src={logo}></img>
       </header>
}



export default Header