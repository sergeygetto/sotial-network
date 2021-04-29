import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import {
  sendNewMessages
} from "../../redux/dialogs-reduser";
import { AppStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type MapDispatchType = {
  sendNewMessages: (newMessagesBody: string)=> void
}

const mapStateToProps = (state: AppStateType)  => {
  return {
    dialogs : state.dialogsPage.dialogs,
    messages : state.dialogsPage.messages,
    // initialMessagesText : state.dialogsPage.initialMessagesText
    
  }
}
//@ts-ignore
const mapDispatchToProps = (dispatch) => {

  return {
  
    sendNewMessages : (newMessagesBody: string) => dispatch(sendNewMessages(newMessagesBody))

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
