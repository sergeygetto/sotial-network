import React from "react";
import { Redirect } from "react-router-dom";
import DialogElem from "./DialogElem/DialogElem";
import el from "./Dialogs.module.css";
import MessagesElem from "./MessagesElem/MessagesElem";
import { Field, reduxForm } from 'redux-form'
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxFieldLengthCreator, requiredFieldValidationForm } from "../../utilits/validation";

type PropsType = {
  dialogs: Array<string>
  messages: Array<string>
  id: number
  name: string
  img: string
}
type MessagesType = {
  sendNewMessages: ()=> void
}
const Dialogs = (props: PropsType) => {
  let dialogsItem = props.dialogs.map((elem) => (
    //@ts-ignore
    <DialogElem key={elem.id} name={elem.name} id={elem.id} img={elem.img} />
  ));

  let messagesItem = props.messages.map((elem) => (
    //@ts-ignore
    <MessagesElem key={elem.id} messages={elem.messages} />
  ));
    //@ts-ignore

  const onSubmitAddMessages = (values) =>{
    //@ts-ignore

    props.sendNewMessages(values.newMessagesBody) 
  }

  return (
    <>
      <div className={el.dialogs}>
        <div className="dialogElem">{dialogsItem}</div>
        <div className="messagesElem">
          {messagesItem}
          <div>
          <MessagesReduxForm onSubmit={onSubmitAddMessages} />

          </div>
        </div>
      </div>
    </>
  );
};

type PropsFormType = {
  handleSubmit: any
}

let maxLength50 = maxFieldLengthCreator(50)
const MessagesForm = (props: PropsFormType) => {
  return (
<form onSubmit={props.handleSubmit}>  
            <div>  
              <Field
                placeholder={"send message"} name={'newMessagesBody'} 
                component={Textarea} validate={[requiredFieldValidationForm , maxLength50]} />
            </div>
            <div>
            
              <button >Send</button>
            </div>
            </form>
  )}

 const MessagesReduxForm = reduxForm({
   form: 'addMessages'
 }) (MessagesForm)

export default Dialogs;
