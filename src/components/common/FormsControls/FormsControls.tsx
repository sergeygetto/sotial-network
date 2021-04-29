import React from "react"
import { WrappedFieldProps } from "redux-form"
import el from "../FormsControls/FormsControls.module.css"

type PropsType = {
  input: string
  meta: {
    touched: boolean
    error: string
  }
}

export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    // debugger;
    let error = meta.touched && meta.error 
    return(
    <div className = {el.formControl + ' ' +  (error? el.error : " ")} >
        <div >  <textarea  {...input} {...props}  /> </div>
      { error && <span> {meta.error} </span> }
    </div>
    )} 


    export const Input: React.FC<PropsType> = ({input, meta, ...props}) => {
        let error = meta.touched && meta.error 
        return(
        <div className = {el.formControl + ' ' +  (error? el.error : " ")} >
            <div >  <input  {...input} {...props}  /> </div>
          { error && <span> {meta.error} </span> }
        </div>
        )} 
