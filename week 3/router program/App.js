import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationForm from './components/ValidationForm';
import MynewValidation from './components/MynewValidation';

import Mydropdown from './components/Mydropdown';
import Myvalidation from './components/Myvalidation';
import Studentname from './components/Studentname';

import FetchData from './components/FetchData';
import Postform from './components/Postform';
import {Route,BrowserRouter as Router,Switch,Link}from 'react-router-dom';

function App() {

  
  return (
    <div className="App">
    
     
      <Router>
      <div className="revt">
     
        
        <li>
          <Link to ="/Student"style={{textAlign:"center"}}>StudentLogin</Link>
        </li>
        <li>
          <Link to="/Myvalidation">Myvalidation</Link>
        </li>
        <li>
          <Link to="/Postform">Postform</Link>
        </li>
        
        
       
        <Switch>
         
          <Route path="/Student" exact component={Studentname}></Route>
          <Route path="/Myvalidation" exact component={Myvalidation}></Route>
          <Route path="/Postform" exact component={Postform}></Route>
          
         
          
        </Switch>
        
      </div>
    </Router>
         
    </div>
  );
}
export default App;