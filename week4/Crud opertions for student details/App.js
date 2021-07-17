import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: ' Student form',
      act: 0,
      index: '',
      datas: []
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;
    let city=this.refs.city.value;

    if(this.state.act === 0){   
      let data = {
        name, address,city
      }
      datas.push(data);
    }else{                      
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
      datas[index].city=city;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;
    this.refs.city.value=data.city;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <label>Student name</label><br></br>
          <input type="text" ref="name" placeholder="your name" className="formField" /><br></br>
          <label>Student department</label><br></br>
          <input type="text" ref="address" placeholder="your department" className="formField" /><br></br>
          <label>Student city</label><br></br>
          <input type="text" ref="city" placeholder="your city" className="formField" /><br></br>
         <br></br>
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}, {data.address},{data.city}
              <button onClick={()=>this.fRemove(i)} className="myListButton">delete</button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}

export default App;