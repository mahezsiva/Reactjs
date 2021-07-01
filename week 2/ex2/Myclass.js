import { Component } from "react";


export default class exercise extends Component {
  
    render() {
        return (
          <div>
    <form>
  <label>
  USERNAME:<input type="text" name="name" placeholder="enter the name" />
  <br></br>
  </label>
 <label>
 PASSWORD:<input type="text" name="password" placeholder="enter the password"/>
 <br></br>
 </label>
  <input type="submit" value="Submit" />
</form>
            
          
          </div>
        );
      }

}






