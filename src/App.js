
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './redux/state';

const App = (props) => {
  return (
  <BrowserRouter>
     <div className="container">
       <Header />
       <Sidebar />
       <div className='container-app-wrapper'>
          <Route path='/main' render = { ()=>
             <Main state={props.state.mainPage} dispatch={props.dispatch} />}  />
          <Route path='/dialogs' render = { ()=> 
          <Dialogs messages={props.state.dialogsPage.messages}
           dialogs={props.state.dialogsPage.dialogs} dispatch={props.dispatch} 
      initialMessagesText = {store._state.dialogsPage.initialMessagesText}/>}/>
      
       </div>
     </div>
     </BrowserRouter>
  );
}

export default App;
