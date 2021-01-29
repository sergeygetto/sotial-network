import React from "react"
import el from "../FormsControls/FormsControls.module.css"

export const Textarea = ({input, meta, ...props}) => {
    // debugger;
    let error = meta.touched && meta.error 
    return(
    <div className = {el.formControl + ' ' +  (error? el.error : " ")} >
        <div >  <textarea  {...input} {...props}  /> </div>
      { error && <span> {meta.error} </span> }
    </div>
    )} 


    export const Input = ({input, meta, ...props}) => {
        let error = meta.touched && meta.error 
        return(
        <div className = {el.formControl + ' ' +  (error? el.error : " ")} >
            <div >  <input  {...input} {...props}  /> </div>
          { error && <span> {meta.error} </span> }
        </div>
        )} 
