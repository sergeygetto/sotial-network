import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer'
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MainContainer from './components/Main/MainContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {

  return (
  <BrowserRouter>
     <div className="container">
       <HeaderContainer />
       <Sidebar />
       <div className='container-app-wrapper'>
          <Route path='/main/:userID?' render = { ()=>
             <MainContainer  />}  />
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