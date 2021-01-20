import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import {
  changeNewMessagesText,
  sendNewMessages,
} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";

const mapStateToProps = (state)  => {
  return {
    dialogs : state.dialogsPage.dialogs,
    messages : state.dialogsPage.messages,
    initialMessagesText : state.dialogsPage.initialMessagesText,
    
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    changeNewMessagesText : (body) => { 
    let action = changeNewMessagesText(body)
    dispatch(action)},
    sendNewMessages : () => dispatch(sendNewMessages())

  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)


// const DialogsContainer = () => {
  
//   return (
//     <StoreContext.Consumer>
// { store => {
//     let state = store.getState();

//     let changeNewMessagesTEXT = (body) => {
//       let action = changeNewMessagesText(body);
//       store.dispatch(action);
//     };
//     let sendNewMESSAGES = () => {
//       store.dispatch(sendNewMessages());
//     };
  
//    return <Dialogs
//       changeNewMessagesText={changeNewMessagesTEXT}
//       sendNewMessages={sendNewMESSAGES}
//       dialogs={state.dialogsPage.dialogs}
//       messages={state.dialogsPage.messages}
//       initialMessagesText={state.dialogsPage.initialMessagesText}
//     />
// }}
//   </StoreContext.Consumer>
//   );
// };
