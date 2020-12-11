import React from "react";
import StoreContext from "../../context";
import {
  changeNewMessagesText,
  sendNewMessages,
} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  
  return (
    <StoreContext.Consumer>
{ store => {
    let state = store.getState();

    let changeNewMessagesTEXT = (body) => {
      let action = changeNewMessagesText(body);
      store.dispatch(action);
    };
    let sendNewMESSAGES = () => {
      store.dispatch(sendNewMessages());
    };
  
   return <Dialogs
      changeNewMessagesText={changeNewMessagesTEXT}
      sendNewMessages={sendNewMESSAGES}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      initialMessagesText={state.dialogsPage.initialMessagesText}
    />
}}
  </StoreContext.Consumer>
  );
};
export default DialogsContainer;
