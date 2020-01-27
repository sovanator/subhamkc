import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Route, Redirect, Switch} from 'react-router-dom'
import NavBar from './components/navBar'
import HomePage from './components/homePage';


function App() {
  return (
   <React.Fragment>
      
      
      <NavBar />
      <main className="container">
      <Switch>
      <Route path='/' component={HomePage} />
      </Switch>
      </main>
      
     
     
    </React.Fragment>
  );
}

export default App;
