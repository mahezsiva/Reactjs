import React from 'react'
 import SimpleTab from './SimpleTab';
import axios from 'axios';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function Dash() {
    const history = useHistory();
    const [det,setDet]=React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get("http://localhost:3000/citynames");
          setDet(result.data);
        };
        fetchData();
      }, [det]);
    return (

        <div>
          No of students: {det.length} 
          <br/>
          <Button  style={{color:"red",backgroundColor:"violet"}} onClick={() => history.push("/studentview")}>
              Student View 
              
            </Button><br></br>
            <br></br>
          
            
            <Button style={{color:"red",backgroundColor:"violet"}} onClick={() => history.push("/studentedit")}>
              Student Edit
            </Button>
        </div>
    )
}
