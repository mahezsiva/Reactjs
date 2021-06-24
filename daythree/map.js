

//program using map
let keyes=new Map();
let key1={mahesh:10};
let key2={mahesh:20};
//setting the values
keyes.set(key1,"biggie");
keyes.set(key2,"akon");
keyes.set(key3,"pac");

//for each for iterating

keyes.forEach((val,key)=>{
console.log(val +" "+key);

});
