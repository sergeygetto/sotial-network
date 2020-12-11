import dialogsReduser from "./dialogs-reduser";
import mainReduser from "./main-reduser";

export let store = {
  _state: {
    mainPage: {
      posts: [
        { id: 1, messages: "My first post", like: "37" },
        { id: 1, messages: "Hi, my name is Serg", like: "27" },
        { id: 1, messages: "REACT JS", like: "17" },
      ],
      initialText: "what?",
    },
    dialogsPage: {
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
      initialMessagesText: "",
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._state.rerenderTree = observer;
  },
  rerenderTree() {
    // console.log(531531)
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.mainPage = mainReduser(this._state.mainPage, action);
    this._state.rerenderTree(this._state);
  },
};

export default store;
// window.state = state
