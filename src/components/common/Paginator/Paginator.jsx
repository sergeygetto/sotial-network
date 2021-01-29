import React, { useState } from 'react'
import el from '../../Users/Users.module.css'
// import userImg from './../../assets/images/avatar.jpg'


const Paginator = (props) =>{
    
let countPage = Math.ceil( props.totalPage / props.pageSize );
    let pages = [];
    for( let i = 1; i <= countPage; i++){
     pages.push(i) 
    }
    let portionSize = 20

    let portionCount = Math.ceil (countPage / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div>
    <div className={el.number}>
        {portionNumber > 1 &&
        <button onClick = {()=>{setPortionNumber(portionNumber - 1)}}> 	&#8592;  </button> }
    
    {pages
    .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
    .map(p =>{
        return(
            <div className={el.line}> <span className = {props.currentPage === p && el.active  }
        onClick = { ()=> {props.onPageChanged(p)} }>{p}</span>  </div>
    )})}
    {portionCount > portionNumber &&
        <button onClick = {()=>{setPortionNumber(portionNumber + 1)}}> &#8594;  </button> }
    
    </div>
</div>
}

export default Paginator