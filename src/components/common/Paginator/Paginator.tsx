import React, { useState } from 'react'
import cn from 'classnames'
import el from '../../Users/Users.module.css'
// import userImg from './../../assets/images/avatar.jpg'
// import "./Paginator.css"

type PropsType = {
    totalPage: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number)=> void
}

// : React.FC <Props>
let Paginator: React.FC <PropsType> = (props) =>{

    // const className: string = el.number
    
let countPage = Math.ceil( props.totalPage / props.pageSize );
    let pages: Array<number> = [];
    for( let i = 1; i <= countPage; i++){
     pages.push(i) 
    }
    let portionSize = 20

    let portionCount = Math.ceil (countPage / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

return( 
    <div>
        <div className={el.number}>
    {portionNumber > 1 &&
    <button onClick = {()=>{setPortionNumber(portionNumber - 1)}}> 	&#8592;  </button> }

{pages
.filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
.map(p =>{
    return(
        <div className={el.line} key={p}> <span className={cn({[el.active]: props.currentPage === p})  }  onClick = { ()=> {props.onPageChanged(p)}}> 
     {p} </span>  </div>
)})}
{portionCount > portionNumber &&
    <button onClick = {()=>{setPortionNumber(portionNumber + 1)}}> &#8594;  </button> }

    </div>
</div>
)
    
}

export default Paginator
