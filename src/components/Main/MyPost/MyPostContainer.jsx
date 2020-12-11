import React from "react";
import StoreContext from "../../../context";
import { NewPOST, ChangeTEXT } from "../../../redux/main-reduser";
import MyPost from "./MyPost";

const MyPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let onAddPost = () => {
          store.dispatch(NewPOST());
        };
        let updateText = (text) => {
          let action = ChangeTEXT(text);
          store.dispatch(action);
        };
        return (
          <MyPost
            ChangeTEXT={updateText}
            NewPOST={onAddPost}
            posts={state.mainPage.posts}
            initialText={state.mainPage.initialText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostContainer;
