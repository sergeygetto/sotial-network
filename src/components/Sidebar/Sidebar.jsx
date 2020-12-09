import React from 'react'
import { NavLink } from 'react-router-dom'
import el from './Sidebar.module.css'

const Sidebar =()=> {
return <nav className={el.sidebar}><nav>
         <ul>
           <li className={`${el.item} `}><NavLink to="/main" activeClassName={el.active}>Home</NavLink></li>
           <li className={el.item}><NavLink to="/dialogs" activeClassName={el.active}>Messages</NavLink></li>
           <li className={el.item}><NavLink to="/photo" activeClassName={el.active}>Photo</NavLink></li>
           <li className={el.item}><NavLink to="/video" activeClassName={el.active}>Video</NavLink></li>
           <li className={el.item}><NavLink to="/settings" activeClassName={el.active}>Settings </NavLink></li>    
           </ul>
           </nav>
           </nav>
}

export default Sidebar