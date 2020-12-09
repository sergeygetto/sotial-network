const NEW_POST = "NEW-POST";
const CHANGE_TEXT = "CHANGE-TEXT";

export const mainReduser = (state, action) => {
  switch (action.type) {
    case NEW_POST:
      let postAdd = {
        id: 4,
        messages: state.initialText,
        like: "51",
      };
      state.posts.unshift(postAdd);
      state.initialText = "";
      return state;

    case CHANGE_TEXT:
      state.initialText = action.update;
      return state;
    default:
      return state;
  }
};

export const NewPOST = () => ({ type: NEW_POST });

export const ChangeTEXT = (text) => ({ type: CHANGE_TEXT, update: text });

export default mainReduser;
