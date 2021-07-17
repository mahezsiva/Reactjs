import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function View() {
    const history = useHistory();
    const [det,setDet]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get("http://localhost:4000/details");
          setDet(result.data);
        };
        fetchData();
      }, [det]);
    return (
        <div>
          <table class="table">
  <thead>
    <tr>
    <th scope="col">StudentId</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Gender</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
      {

         det.map((x)=>{
             return(
            <tr>
            <th scope="row">{x.id}</th>
            <td>{x.fname}</td>
            <td>{x.lname}</td>
            <td>{x.Gender}</td>
            <td>{x.age}</td>
            <td>{x.email}</td>
          </tr>
             )
         })
      }
          
   
  
  </tbody>
</table> 
{" | "}
            <Button onClick={() => history.push("/")}>
             Back
            </Button>
        </div>
    )
}
