import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './components/Main/MainContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import NotFound from './components/common/NotFound'
import { connect } from 'react-redux';
import {initializationUserThunkCreator} from './redux/app-reduser'
import { compose } from 'redux';
import Loading from './components/common/loading/Loading'
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// import DialogsContainer from './components/Dialogs/DialogsContainer';


class App extends React.Component {
  
  catchAllErrors = (promiseRejectionEvent) => {
   
    alert("Some Error")
  }
  
  componentDidMount (){
    this.props.initializationUserThunkCreator()
        window.addEventListener("unhandledrejection", this.catchAllErrors) 
  }
  componentWillUnmount (){
    window.removeEventListener("unhandledrejection", this.catchAllErrors)
  }

render(){
if(!this.props.initialization)return <Loading />
  return (
  <BrowserRouter>
  
     <div className="container">
       <HeaderContainer />
       <Sidebar />
       <div className='container-app-wrapper'>
       <Switch>
          <Route path='/main/:userID?' render = { ()=>
             <MainContainer  />}  />
          
          <Route path='/dialogs' render = { ()=> {
            return <React.Suspense fallback={<div>Loading...</div>}>
            <DialogsContainer />
          </React.Suspense>
          } 
          }/>
      
            <Route path='/users' render = { ()=> 
          <UsersContainer  />}/> 
      
            <Route path='/login' render = { ()=> 
          <Login  />}/> 
            
            <Route exact path='*' render = { ()=> 
          <NotFound /> }/> 
     </Switch> 
       </div>
     </div>
     
     </BrowserRouter>
  );
}
}
const mapStateToProps = (state) => ({
initialization: state.app.initialization
})
export default compose(
  connect(mapStateToProps, {initializationUserThunkCreator}))(App);

// state={props.state.mainPage} dispatch={props.dispatch}  store={props.store} 