import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer'
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {

  return (
  <BrowserRouter>
     <div className="container">
       <Header />
       <Sidebar />
       <div className='container-app-wrapper'>
          <Route path='/main' render = { ()=>
             <Main  />}  />
          <Route path='/dialogs' render = { ()=> 
          <DialogsContainer  />}/>
      
            <Route path='/users' render = { ()=> 
          <UsersContainer  />}/> 
      
       </div>
     </div>
     </BrowserRouter>
  );
}

export default App;

// state={props.state.mainPage} dispatch={props.dispatch}  store={props.store}