
//global scope can be accessed anywhere.
let iamglobal='global';
//global scope can be accessed anywhere.
var iamalsoglobal='global1';
if(true){
let iamlocal='local';
console.log(iamlocal);
console.log(iamalsoglobal);
}
console.log(iamglobal);

//console.log(iamlocal); -->if i try to access it leads to error beacuse of inside block scope