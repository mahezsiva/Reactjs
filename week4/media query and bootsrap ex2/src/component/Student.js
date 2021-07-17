import axios from 'axios';
import React,{useState,useEffect} from 'react'
import ErrorMessage from './ErrorMessage';
import './Student.css';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function Student() {
    const history = useHistory();
    const initialvalues={
        fname:'',
        lname:'',
        age:'',
        email:'',
       id:'',
        Gender:-1
      
        
    }
    const [formValues,setFormvalues]=useState(initialvalues);
    const [formErrors,setFormErrors]=useState({});
    const [submitted, setSubmitted] = useState(false);
   

    const gender=[
        {id:1,name:"Male"},
        {id:2,name:"Female"}
    ]

    const handleDoSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        console.log(formValues);
        console.log("Submitted");
        
        console.log("===" + Object.entries(formErrors).length)

       setSubmitted(true);

       console.log(submitted);
       axios.post("http://localhost:4000/details",formValues);
      
        
       
     
        
    };

    const handleOnChange=(event)=>{
        const {name,value}=event.target;

        setFormvalues((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        });

    }
    const validate=(values)=>{
        let errors={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(values.fname==""){
            errors.fname="FirstName cannot be empty"
        }
        if(values.lname==""){
            errors.lname="Lastname cannot be empty"
        }
        if(values.age==""){
            errors.age="Age cannot be empty"
        }
        if(values.age>30)
        {
            errors.age = "Enter Valid Age";
        }
        if(values.age<5)
        {
            errors.age = "Enter Valid Age";
        }
        if(values.Gender<0){
            errors.Gender="Please Select Gender"
        }
        if(values.country<0){
            errors.country="Please Select Country"
        }
        if(values.email==""){
            errors.email="Email cannot be empty"
        }else if(!regex.test(values.email)){
            errors.email="Invalid";
        }
        if(values.password==""){
            errors.password="Password cannot be empty"
        }
       
        return errors;
    };
   
    return (
        <div className="detail">
            
            {(Object.entries(formErrors).length==0) && submitted  && <div> Details Submitted Sucessfully </div>}
           <form onSubmit={handleDoSubmit} noValidate>
               {submitted}
           <div>
                   <label>First Name</label>
                   <input value={formValues.fname}name="fname" id="fname" onChange={handleOnChange}/>
                   <ErrorMessage message={formErrors.fname}/>
                  
               </div>
               <div>
                   <label>Last Name</label>
                   <input value={formValues.lname}name="lname" id="lname" onChange={handleOnChange}/>
                   <ErrorMessage message={formErrors.lname}/>
                   
               </div>
               <div>
                   <label>Age</label>
                   <input value={formValues.age}name="age" type="number" id="age" onChange={handleOnChange}/>
                   <ErrorMessage message={formErrors.age}/>
                   
               </div>
              
               <div>
                   <label>Gender</label>
                   <select name="Gender" onChange={handleOnChange}>
                       <option value="-1">Please select a gender</option>
                       {
                           gender.map(x=>{
                               return<option value={x.name}>{x.name}</option>
                           })
                       }
                   </select>
                   
                   <ErrorMessage message={formErrors.Gender}/>    
               </div>
              

               <div>
                   <label>Email</label>
                   <input value={formValues.email}name="email" id="email" onChange={handleOnChange}/>
                   
                        <ErrorMessage message={formErrors.email}/>
                   
                   
               </div>
               <div>
                   <label>Student ID</label>
                   <input value={formValues.id}name="id" type="text" id="id" onChange={handleOnChange}/>
                   
                        <ErrorMessage message={formErrors.id}/>
                   
                  
               </div>
               <div>
                   <button type="submit" >Submit</button>
              
              
          {"|"}
           
            <Button onClick={() => history.push("/")}>
             Back
            </Button>
            </div>
            </form>
        </div>
    )
}
