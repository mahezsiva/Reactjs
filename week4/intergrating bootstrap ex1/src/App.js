import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';



import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Myvalidation from './components/Myvalidation';
import Studentname from './components/Studentname';
import 'bootstrap/dist/css/bootstrap.min.css'
import View from './components/View';
import Postform from './components/Postform';
import {LinkContainer} from 'react-router-bootstrap'
import {Route,BrowserRouter as Router,Switch}from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import Dash from './components/Dash';

function App() {

  
  return (
    <div className="App">
    
     
      <Router>
      <div className="revt">
     
        
        {/* <li>
          <Link to ="/Student"style={{textAlign:"center"}}>StudentLogin</Link>
        </li>
        <li>
          <Link to="/Myvalidation">Myvalidation</Link>
        </li>
        <li>
          <Link to="/Postform">Postform</Link>
        </li>

         */}
         <Navbar bg="dark" variant="dark">
           <Navbar.Toggle aria-controls="basic-navbar-nav"/>
         <LinkContainer to="/Student">
    <Nav.Link>StudentLogin</Nav.Link>
</LinkContainer>
<LinkContainer to="/Myvalidation">
    <Nav.Link>Myvalidation</Nav.Link>
</LinkContainer>
<LinkContainer to="/Postform">
    <Nav.Link>Postform</Nav.Link>
</LinkContainer>
<LinkContainer to="/Dash">
    <Nav.Link>Dash</Nav.Link>
</LinkContainer>
        
        
</Navbar>
        <Switch>
         
          <Route path="/Student" exact component={Studentname}></Route>
          <Route path="/Myvalidation" exact component={Myvalidation}></Route>
          <Route path="/Postform" exact component={Postform}></Route>
          <Route path="/Dash" exact component={Dash}></Route>
          <Route path="/Studentview" component={View} />
          <Route path="/Studentedit" component={Studentname }/>
        <Route path="/Studentview" component={View} />

          
         
          
        </Switch>
        
      </div>
    </Router>
         
    </div>
  );
}
export default App;