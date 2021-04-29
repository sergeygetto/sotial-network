import React from 'react'
import el from './Users.module.css'
import userImg from './../../assets/images/avatar.jpg'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import { UsersType } from '../../types/Types';

type PropsType = {
    totalPage: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number)=> void
    users: Array<UsersType>
    followingProgress: Array<number>
    unFollowThunkCreator: (id: number)=> void
    followThunkCreator: (id: number)=> void
    // id: any
}

const User: React.FC<PropsType> = (props) =>{
    
return ( 
     <div>
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

</div> )
}

export default User