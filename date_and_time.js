//Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//Date types are Objects


let myCreatedDatte = new Date(2023, 0 ,23);
console.log(myCreatedDatte.toDateString()); //Mon Jan 23 2023

console.log(myCreatedDatte.toLocaleString());  // 1/23/2023, 12:00:00 AM


let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatedDatte.getTime());

