import React from 'react'
import el from './Users.module.css'
import userImg from './../../assets/images/avatar.jpg'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

const User = (props) =>{
    
// let countPage = Math.ceil( props.totalPage / props.pageSize );
//     let pages = [];
//     for( let i = 1; i <= countPage; i++){
//      pages.push(i) 
//     }
//     return <>
//     <div className={el.number}>
//     {pages.map(p =>{
//         return(
//             <div className={el.line}> <span className = {props.currentPage === p && el.active  }
//         onClick = { ()=> {props.onPageChanged(p)} }>{p}</span>  </div>
//     )})}
//     </div>
return ( <>
<Paginator totalPage={props.totalPage} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />

 {
     props.users.map(user => <div className={el.container}>
             <div className={el.avatar}>
                <NavLink to={"/main/" + user.id}>
                <div> <img src={ user.photos.small != null ? user.photos.small : userImg } alt="ava"/> </div>
                </NavLink>

                <div>
                    
                {
                user.followed ?
                
                <button disabled={props.followingProgress.some(id => id === user.id)} className={el.btnFollow} onClick={() => {
                    props.unFollowThunkCreator(user.id)
                     }} >unFOLLOW</button> 
                : 
                <button disabled={props.followingProgress.some(id => id === user.id)} className={el.btnFollow} onClick={() => {
                
                    props.followThunkCreator(user.id)
                     }}>FOLLOW</button> 
                }
                 </div>

             </div>
             <div className={el.description}>
             <span>{user.name}</span><br/> 
             <span> status: {!user.status ? "пока тут пусто": `${user.status}`}</span> <br/>
             {/* <span>{user.location.country}</span> */}
             {/* <spac n>{user.location.city}</spac> */}
             </div>
              </div>
     )
 }

</>)
}

export default User