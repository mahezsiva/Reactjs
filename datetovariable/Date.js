


console.log("storing date in variable");
const d = new Date();
console.log(d);



console.log("storing past date");
const today = new Date()
const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)
console.log("Yesterday's date::" + yesterday); 
