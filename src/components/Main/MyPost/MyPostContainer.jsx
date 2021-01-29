import { connect } from "react-redux";
import { NewPOST } from "../../../redux/main-reduser";
import MyPost from "./MyPost";
const mapStateToProps = (state) => {
  return {
  posts: state.mainPage.posts,

  }
}
const mapDispatchToProps = (dispatch) => {
  return{
NewPOST : (addMyPost) => dispatch(NewPOST(addMyPost)),
}
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;







// const MyPostContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let onAddPost = () => {
//           store.dispatch(NewPOST());
//         };
//         let updateText = (text) => {
//           let action = ChangeTEXT(text);
//           store.dispatch(action);
//         };
//         return (
//           <MyPost
//             ChangeTEXT={updateText}
//             NewPOST={onAddPost}
//             posts={state.mainPage.posts}
//             initialText={state.mainPage.initialText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
