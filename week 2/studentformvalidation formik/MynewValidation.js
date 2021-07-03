

import{useFormik}from 'formik';
import * as Yup from 'yup';

import React from 'react'

export default function MynewValidation() {
    const validationSchema = Yup.object({
        StudentName : Yup.string().required("username is mandatory"),
        Studendept : Yup.string().required("department is mandatory"),
        email : Yup.string().email("Invalid").required("Please enter a valid email"),
        location : Yup.string().required("location is mandatory"),
       
        

    })

    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            StudentName:'',
            Studentdept:'',
            email:'',
            location:'',
           
        },
        validationSchema,
        onSubmit(values){
            console.log("Submitted");
            console.log(values);
        }
    })
    return (
        <div>
            <h1 className="h1">STUDENT FORM</h1>
            <form onSubmit={handleSubmit} noValidate>
                <div className="d1">
                   
                    
                <label>StudentName :</label> <input type="text" name="studentName" onChange={handleChange} values={values.username}/><br></br>
                   {errors.StudentName? errors.StudentName : null}
                </div>
                <div className="d2">
                    <label>Email :</label>
                    <input type="email" name="email" onChange={handleChange} values={values.email}/>
                    {errors.email ?<div className='error'> { errors.email }</div>:null}
                     
                </div>
                <div className="d4">
                    <label>studentdept:</label>
                    <input type="text" name="studentdept" onChange={handleChange} values={values.Studentdept}/>
                    {errors.Studentdept ? errors.Studentdept: null}
                </div>
                <div className="d4">
                    <label>location:</label>
                    <input type="text" name="location" onChange={handleChange} values={values.location}/>
                    {errors.location ? errors.location: null}
                </div>
                 <div className="d3">
                 <button type='submit'>Submit</button>
                 </div>
               
            </form>
        </div>
    )
}
