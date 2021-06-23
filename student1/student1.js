
let students=[]

students=[
{id:123,name:"mahesh",mark:50,pincode:600023},
{id:124,name:"siva",mark:40,pincode:600023},
{id:125,name:"ajay",mark:80,pincode:600056},
{id:126,name:"akash",mark:30,pincode:600057}

]
console.log("yes");
let ref=students.map(pin=>{
    if(pin.pincode==600023){
        let mar=pin.mark+15;
        console.log(`NAME: ${pin.name} Stuednt id: ${pin.id} pincode: ${pin.pincode} mark: ${mar} `);
        
    }
  
});