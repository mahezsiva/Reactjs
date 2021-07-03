



import React from 'react'
import {useForm}from "react-hook-form";

export default function MyNewFunction() {
    const{register,handleSubmit,errors}=useForm();
    const onSubmit=(data) =>{
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username</label>
            <input type="text" name="username" ref={register}></input>
            <label>Password</label>
            <input type="password" name="password" ref={register}></input>


            </form>
            
        </div>
    )
}
