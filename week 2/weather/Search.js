
import MockData from '../MockData.json';
import React,{uesState, useState} from 'react';

const Search=()=>{
    const[search,setsearch]=useState("");
    const res=new Date();
    return(
        <div className="container">
 <input type="text" placeholder="search.." className="form-control" style={{marginTop:50,marginBottom:20,width:"40%"}} onChange={(e)=>{setsearch(e.target.value);
 }}/>
           
           
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>city</th>
                        <th>temperture</th>
                        <th>climate</th>
                        <th>windspeed</th>
                    </tr>
                </thead>
                <tbody>
                    {MockData.filter((val)=>{
                        if(setsearch===" "){
                            return val;
                        }else if(
                           
                       val.climate.toString().toLowerCase().includes(setsearch.toString().toLowerCase())
                    ){
                        return val;
                    }
                    
                    }).map((m)=>(
                        <tr key={m.city}>
                            <td>{m.city}</td>
                            <td>{m.temperature}</td>
                            <td>{m.climate}</td>
                            <td>{m.windspeed}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
        
    );

};
export default Search;