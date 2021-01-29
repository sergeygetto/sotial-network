const SEND_NEW_MESSAGES = "dialogs/SEND-NEW-MESSAGES";
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
    {id: 4, name: 'Ivan' ,img: 'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg'},
    {id: 5, name: 'Sveta' ,img: 'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg'},
    {id: 6, name: 'Jack' ,img: 'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg'}
  ],
   
}


export const dialogsReduser = (state = initialState, action) => {

  switch(action.type) {
    case SEND_NEW_MESSAGES: 
    let body = action.newMessagesBody
    return {
      ...state,
      messages : [...state.messages, {id:6, messages : body }],
    }
  default: return state;
  }
};


export const sendNewMessages = (newMessagesBody) => ({ type: SEND_NEW_MESSAGES, newMessagesBody });
export default dialogsReduser;
