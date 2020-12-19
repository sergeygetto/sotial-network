const CHANGE_NEW_MESSAGES_TEXT = "CHANGE-NEW-MESSAGES-TEXT";
const SEND_NEW_MESSAGES = "SEND-NEW-MESSAGES";
const initialState = {
  messages: [
    { id: 1, messages: "React" },
    { id: 2, messages: "YO" },
    { id: 3, messages: "React Js" },
  ],
  dialogs: [
    {
      id: 1,
      name: "Serg",
      img: "https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg",
    },
    {
      id: 2,
      name: "Cat",
      img: "https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg",
    },
    {
      id: 3,
      name: "Alex",
      img: "https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg",
    },
    // {id: 4, name: 'Ivan' ,img: 'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg'},
    // {id: 5, name: 'Sveta' ,img: 'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg'},
    // {id: 6, name: 'Jack' ,img: 'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg'}
  ],
  initialMessagesText: "53",
}


export const dialogsReduser = (state = initialState, action) => {

  switch(action.type) {
    case CHANGE_NEW_MESSAGES_TEXT: 
    return {...state,
      initialMessagesText : action.body
    }
    case SEND_NEW_MESSAGES: 
    let body = state.initialMessagesText
    return {
      ...state,
      initialMessagesText : "",
      messages : [...state.messages, {id:6, messages : body }],
    }
  default: return state;
  }
};

export const changeNewMessagesText = (body) => ({
  type: CHANGE_NEW_MESSAGES_TEXT,
  body: body,
});
export const sendNewMessages = () => ({ type: SEND_NEW_MESSAGES });
export default dialogsReduser;
