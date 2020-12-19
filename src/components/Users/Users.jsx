import React from 'react'
import el from './Users.module.css'
import userImg from './../../assets/images/avatar.jpg'

const User = (props) =>{
    

let countPage = Math.ceil( props.totalPage / props.pageSize );
    let pages = [];
    for( let i = 1; i <= countPage; i++){
     pages.push(i) 
        
    }
    
    
return <div>
    <div className={el.number}>
    {pages.map(p =>{
        return(
            <div className={el.line}> <span className = {props.currentPage === p && el.active  }
        onClick = { ()=> {props.onPageChanged(p)} }>{p}</span>  </div>
    )})}
    </div>
 {
     props.users.map(user => <div className={el.container}>
             <div className={el.avatar}>
                
                <div> <img src={ user.photos.small != null ? user.photos.small : userImg } alt="ava"/> </div>
                <div>
                {
                user.followed 
                ? <button className={el.btnFollow} onClick={() => {props.unFollow(user.id)} }>unFOLLOW</button> 
                : <button className={el.btnFollow} onClick={() => {props.follow(user.id)} }>FOLLOW</button> 
                }
                 </div>

             </div>
             <div className={el.description}>
             <span>{user.name}</span> 
             <span>{user.status}</span> <br/>
             {/* <span>{user.location.country}</span>
             <spac n>{user.location.city}</spac> */}
             </div>
              </div>
     )
 }
</div>

}

export default User


// props.setUsers ( [
//     { id: 1,followed: false, imgURL :'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg',
//     fullName: 'Serg', status:'what?', location: { country:'Russia', city: 'MSK' }},
//     { id: 2,followed: true, imgURL :'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg',
//     fullName: 'Alex', status:'what?', location: { country:'Russia', city: 'EKB' }},
//     { id: 3,followed: false, imgURL :'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg',
//     fullName: 'Max', status:'what?', location: { country:'Russia', city: 'SPb' }},
//   ])
