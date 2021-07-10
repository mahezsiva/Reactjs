

import { values } from 'lodash';
import React ,{useState,useEffect} from 'react'
import Select from 'react-select'
import residence from './residence.json'





export default function Studentname() {
  
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

      }
      useEffect(()=>{
        
        

        fetch("http://localhost:8000/citynames").then(res=>res.json()).then(data=>{
          
          setCities(data);
        }).catch(error=>{
          console.log(error);
          
     }).finally(error=>{
       console.log("finally is executed");
     })
      },[]);
    
      const handleOnChange = (event) => {
        
    
        const { name, value } = event.target;
      
        setValues((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
    
        console.log(Values);
      };
    
      const [cities,setCities] = useState([]);
    return (
      <div className="app1">
        <div className="app">

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
               
 

            </form>
            
        </div>
        </div>
    )
}
