



//date model
var date2 = new Date(); 
date2.setFullYear(2021, 5, 25);
console.log(date2);

//current date
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getHours() + ":" +today.getMinutes() + ":" + today.getSeconds();
console.log(date);