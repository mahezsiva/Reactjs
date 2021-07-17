import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function View() {
    const history = useHistory();
    const [det,setDet]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get("http://localhost:3000/namescity");
          setDet(result.data);
        };
        fetchData();
      }, [det]);
    return (
        <div>
          <table class="table">
         
  <thead>
    <tr>
    <th scope="col">Studentname</th>
      <th scope="col">city</th>
      <th scope="col">Studentdept</th>
      <th scope="col">residence</th>
    
    </tr>
  </thead>
  <tbody>
      {

         det.map((x)=>{
             return(
            <tr>
            <th scope="row">mahesh</th>
            <td>siva</td>
           <td>json</td>
            <td>{x.residence}</td> 
           
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
