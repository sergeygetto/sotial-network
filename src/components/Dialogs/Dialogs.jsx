import React from "react";
import { Redirect } from "react-router-dom";
import DialogElem from "./DialogElem/DialogElem";
import el from "./Dialogs.module.css";
import MessagesElem from "./MessagesElem/MessagesElem";

const Dialogs = (props) => {
  let dialogsItem = props.dialogs.map((elem) => (
    <DialogElem name={elem.name} id={elem.id} img={elem.img} />
  ));

  let messagesItem = props.messages.map((elem) => (
    <MessagesElem messages={elem.messages} />
  ));

  let onChangeNewMessagesTEXT = (e) => {
    let body = e.target.value;
    props.changeNewMessagesText(body);
  };
  let onSendNewMESSAGES = () => {
    props.sendNewMessages();
  };


  return (
    <>
      <div className={el.dialogs}>
        <div className="dialogElem">{dialogsItem}</div>
        <div className="messagesElem">
          {messagesItem}
          <div>
            <div>
              {" "}
              <textarea
                onChange={onChangeNewMessagesTEXT}
                value={props.initialMessagesText}
                placeholder="send message"
              ></textarea>{" "}
            </div>
            <div>
              {" "}
              <button onClick={onSendNewMESSAGES}>Send</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dialogs;
