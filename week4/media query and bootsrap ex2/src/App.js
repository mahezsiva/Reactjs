import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router";
import Dash from './component/Dash';
import Student from './component/Student';
import View from './component/View';

function App() {
  
  return (
    <div className="App">
  <Switch>
        <Route exact path="/" component={Dash} />
        <Route path="/Studentedit" component={Student }/>
        <Route path="/Studentview" component={View} />
        
      </Switch>   

         </div>
  );
}

export default App;
