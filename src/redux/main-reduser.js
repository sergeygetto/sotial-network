const NEW_POST = "NEW-POST";
const CHANGE_TEXT = "CHANGE-TEXT";

const initialState = {
 posts: [
        { id: 1, messages: "My first post", like: "37" },
        { id: 1, messages: "Hi, my name is Serg", like: "27" },
        { id: 1, messages: "REACT JS", like: "17" },
      ],
      initialText: "what?"
    }

export const mainReduser = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST:
    return {
      ...state, 
      initialText : "",
      posts: [{id: 4,messages: state.initialText,like: "51"}, ...state.posts ]
    }
    case CHANGE_TEXT:
    return {
      ...state,
      initialText : action.update
    }
    default:
      return state;
  }
};

export const NewPOST = () => ({ type: NEW_POST });

export const ChangeTEXT = (text) => ({ type: CHANGE_TEXT, update: text });

export default mainReduser;
