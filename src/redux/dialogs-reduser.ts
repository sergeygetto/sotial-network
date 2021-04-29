import { Action } from 'redux';
const SEND_NEW_MESSAGES = "dialogs/SEND-NEW-MESSAGES";

type MessagesType = {
  id: number
  messages: string
}
type DialogsType = {
  id: number
  name: string
  img: string
}

type InitialStateType ={
messages: Array<MessagesType>
dialogs: Array<DialogsType>
}
const initialState: InitialStateType = {
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

type ActionsTypes = SendNewMessagesActionType
export const dialogsReduser = (state = initialState, action: ActionsTypes): InitialStateType => {

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

type SendNewMessagesActionType = {
  type: typeof SEND_NEW_MESSAGES
  newMessagesBody: string
}
export const sendNewMessages = (newMessagesBody: string):SendNewMessagesActionType =>
    ({ type: SEND_NEW_MESSAGES, newMessagesBody });
export default dialogsReduser;
