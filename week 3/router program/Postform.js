  import React,{useState} from 'react'
  import axios from 'axios'
import { values } from 'lodash';
  export default function Postform() {
      const [data,setdata]=useState({
          Studentname:"",
          Studentid:"",
          Studentdept:"",
      });
      const handleOnChange = (event) => {
        
    
        const { name, value } = event.target;
      
        setdata((prev) => {
          return {
            ...prev,
            [name]: value,
          }
        })
    
       console.log(values);
      };
      const handleOnSubmit=(e)=>{
        e.preventDefault();
         console.log(setdata);
         alert("Submitted");

    }
      return (
          <div className="cls">

              <form onSubmit={handleOnSubmit}>
                  <label>Studentname  :</label>
                  <input type="text" onChange={handleOnChange}placeholder="enter your name"values={data.Studentname} ></input><br></br>
                  <br></br>
                  <label>Studentid  :</label>
                  <input type="text"placeholder="enter your id"values={data.Studentid} ></input><br></br>
                  <br></br>
                  <label>Studentdept  :</label>
                  <input type="text"placeholder="enter your department" values={data.Studentdept} ></input>
                  <br></br>
                  <br></br>
                  <button type="submit">Submit</button>
              </form>
              
          </div>
      )
  }
  