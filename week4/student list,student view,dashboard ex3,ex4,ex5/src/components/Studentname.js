import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import axios from 'axios';
import { values } from 'lodash';
import React ,{useState,useEffect} from 'react'
import Select from 'react-select'
import residence from './residence.json'






export default function Studentname() {
  const history=useHistory();
  const [res,setRes] = useState([]);
      const [Values,setValues] = useState({
        Studentname: "",
        city: "-1",
        Studentdept:"",
        residence:"-1"
      
      });
     
  
    
    

      const handleOnSubmit=(e)=>{
          e.preventDefault();
           console.log(setValues);
           alert("Submitted");
          axios.post("http://localhost:3000/citynames", Values);
      }

   
 
      useEffect(()=>{
        fetch("http://localhost:3000/citynames").then(res=>res.json()).then(data=>{
          
          setCities(data);
        }).catch(error=>{
          console.log(error);
          
     })

      });
    
      const handleOnChange = (event) => {
        
    
        const { name, value } = event.target;
      
        setValues((prev) => {
          return {
            ...prev,
            [name]: value,
          }
        })
    
        
      };
    
      const [cities,setCities] = useState([]);
    return (
      <div className="app1">
        <div className="app">
        {res && <div>{res}</div> }

            <form onSubmit={handleOnSubmit} noValidate>
              <h1 >STUDENT FORM</h1>
                <label>Studentname</label><br></br>
               <input type="text" name="Studentname"values={values.Studentname} onChange={handleOnChange}></input><br></br>
               <label>Student dept</label><br></br>
               <input type="text" name="Studentdept"values={values.Studentdept} onChange={handleOnChange}></input>
               
               <br></br>
              <div>City</div>
               <div>
               
                <select name="city" onChange={handleOnChange} value={Values.city}>
                
                <option value={values.city}>Please select a city</option>
                {cities.map((x) => {
              return <option key={x.id} value={x.id}>{x.cities}</option>;
            })}
                
                </select>
                </div>
                <div>Residence type</div>
                <div>

                  <select name="residence" onChange={handleOnChange} value={Values.city}>
                    <div>Residence</div>
                    <option value={values.residence}>Please select residence</option>
                    {
                      residence.residencename.map((result)=>(<option title={result.id}>{result.residence}</option>))
                    }
                  </select>
                </div><br></br>
             
                <button type="submit">Submit</button>
                      
          {"|"}
           
           <Button onClick={() => history.push("/")}>
            Back
           </Button>


               
               
 

            </form>
            
        </div>
        </div>
    )
                  }

