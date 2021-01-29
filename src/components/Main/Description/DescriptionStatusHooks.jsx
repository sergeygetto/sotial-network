import React, { useEffect, useState } from 'react'

const DescriptionStatusHooks = (props) =>  {

    const [editStatus , setEditStatus] = useState(false)
    let [status , setStatus] = useState(props.status)
    
    useEffect( () => {
        setStatus(props.status)},
        [props.status])

   const onEditStatus = () =>{
    setEditStatus(true)
   }
   const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value)
   }

   const offEditStatus = () => {
    setEditStatus(false)
    props.updateUserStatusThunkCreator(status)
   }
    return( <>
    <div>
         {!editStatus &&
      <div>
          <span  onDoubleClick={onEditStatus}>  {props.status || 'no status' } </span>
          </div> }
          
            {editStatus &&
      <div >
           <input onChange={onChangeStatus} autoFocus={true} onBlur={offEditStatus} 
           defaultValue={status}/> 
          </div> }
      </div>
        </>
    )
}

export default DescriptionStatusHooks