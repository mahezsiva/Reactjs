
//printing city which are not chennai and bangalore
let names=[
{id:12,name:"ethan",location:"chennai"},
{id:11,name:"diya",location:"chennai"},
{id:13,name:"das",location:"chennai"},
{id:14,name:"akash",location:"bangalore"},
{id:15,name:"ajay",location:"madurai"},
];

var result = names.filter (citysort => citysort.location!="chennai"&&citysort.location!="bangalore");
console.log(result);

