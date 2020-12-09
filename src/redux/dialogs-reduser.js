const CHANGE_NEW_MESSAGES_TEXT = "CHANGE-NEW-MESSAGES-TEXT";
const SEND_NEW_MESSAGES = "SEND-NEW-MESSAGES";

export const dialogsReduser = (state, action) => {
  switch(action.type) {
    case CHANGE_NEW_MESSAGES_TEXT:
    state.initialMessagesText = action.body;
    return state
    case SEND_NEW_MESSAGES: 
    let messagesAdd = {
      id: 6,
      messages: state.initialMessagesText,
    };
    state.messages.push(messagesAdd);
    state.initialMessagesText = "";
    return state
  }
  return state;
};

export const changeNewMessagesText = (body) => ({
  type: CHANGE_NEW_MESSAGES_TEXT,
  body: body,
});

export const sendNewMessages = () => ({ type: SEND_NEW_MESSAGES });

export default dialogsReduser;
