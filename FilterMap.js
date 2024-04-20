//  const coding = ["js", "py", "java", "ruby", "cpp"];

//  const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
//  })

//  console.log(values);


//*********Filters***********/  
//Note : if scope is used return Kw is most used 
// const myNums = [1,2,3,4,5,6,7,8,9];

// const newNums = myNums.filter((num)=>{
//     return num > 4
// })

// console.log(newNums)



// const newNums = []
// myNums.forEach((num)=>{
//     if (num>4) {
//         newNums.push(num)
        
//     }
// })
// console.log(newNums);


// const books = [
//     {
//         title : "books one" , genre : "fiction", publish: 1992, edition : 2004
//     },
//     {
//         title : "books two" , genre : "history", publish: 1981, edition : 2000
//     },
//     {
//         title : "books three" , genre : "Non-fiction", publish: 1983, edition : 2002
//     },
//     {
//         title : "books four" , genre : "science", publish: 1983, edition : 2004
//     },
//     {
//         title : "books five" , genre : "science", publish: 1997, edition : 2005
//     },
//     {
//         title : "books six" , genre : "history", publish: 1999, edition : 2001
//     }

// ];

// const userBooks =  books.filter ((bk)=>{
//    return  bk.genre === "history" && bk.publish >=1999 
// } )
// console.log(userBooks);

//***************** Map ******************/
// const myNums = [1,2,3,4,5,6,7,8,9,10];
// const  addNums = myNums.map ((items)=>{
//     return items + 10;
// })
// console.log(addNums)

///// ForEach Loops
//  myNums.forEach ((nm)=>{
//  const result = nm + 10;
//  console.log(result)
// })


///************Chaining Method ******* */
// const myNums  = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums
//                     .map((num)=> num * 10)
//                     .map((num) => num + 1)
//                     .filter((num)=> num>=40)
// console.log(newNums)




//********** Reduce *****************/
// const myNums = [1,2,3,4,5];
// const initialValues = 0;

//using Fucntions 
// const myTotal = myNums.reduce(function (acc,curVal){
//     console.log(`acc: ${acc} and curVal : ${curVal}`)
//     return acc + curVal;
// },0)

///Using Arrow Functions
// const myTotal = myNums.reduce((acc,curVal)=>{
//     return acc + curVal    
// } ,0)
// console.log(myTotal);


///Reduce with objects
// const shoppingCart = [
//     {
//         itemName : "js course",
//         price : 200
//     },
//     {
//         itemName : "python course",
//         price : 400
//     },
//     {
//         itemName : "java course",
//         price : 700
//     },
//     {
//         itemName : "cpp course",
//         price : 1000
//     }
// ]

// const myCart = shoppingCart.reduce((acc,item) => {
//    return acc + item.price

// },0)
// console.log(myCart)



// const myArr = [2,3,4,5,6,7,8];

// function doubleArr () {
//  myArr.map((items)=>{
//     return items * 2;
//   })
// }
// doubleArr(myArr)



// const myNums = [1,2,3,4,5,6,7,8,9,10];
// const  addNums = myNums.map ((items)=>{
//     return items + 10;
// })
// console.log(addNums)

// 1) Make an array of numbers that are doubles of the first array
// function doubleArr (arr){    
// const doubleNums = arr.map((items) => {
//     return items *2;
// })
// console.log(doubleNums)
// }
// doubleArr([2,2,2,2,2])
// doubleArr([3,3,3,3,3])
// doubleArr([4,4,4,4,4])
// // doubleArr()


// 2) Take an array of numbers and make them strings
// function stringItUp(arr) {
//     const strArr = arr.map((items)=> {
//         return items.toString()
//     })
//     console.log(strArr)
// }

// stringItUp([2,3,4,5])

// 3) Capitalize each of an array of names
// function capitalizeNames (arr) {
//     const myArr = arr.map((items) => {
//         return items.toUpperCase()
//     })
//     console.log(myArr)
// }
// capitalizeNames(["jenesh","puja","ram", "jeebesh","shrinika"]);

// 4) Make an array of strings of the names
// function namesOnly(arr){
//     // your code here
//     const str = arr.map((items) => {
//         return items.name
//     })
//     console.log(str)
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 



// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// function makeStrings(arr){
//     // your code here

//     const str  = arr.map((items) => {
//        if (items.age >= 18){
//         return `${items.name} you can go to matrix`
//        }else {
//         return `${items.name} your under age`
//        }
//     })
//     console.log(str)
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 


// function readyToPutInTheDOM(arr){
//     // your code here
//     const str = arr.map((items) => {
//         return `<h1> ${items.name} <h2> ${items.age}`
//     })
//     console.log(str)
//   }
//   const htmlArray = readyToPutInTheDOM([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]); 
//   const nameArray = htmlArray.map(function (e){
//     return e.name;
//   })

//   const agesArray = htmlArray.map(function(e){
//     return e.age;
//   })

//   console.log(nameArray);
//   console.log(agesArray);


// Sum of every positive element
// const input = [1, -4, 12, 0, -3, 29, -150];

// const values  = input.filter (function (num){
//         return num > 0
//     })
//     .reduce(function (acc,curValue){
//          return acc + curValue;
//         },0)

//         console.log(values)

// const myNums = [1,2,3,4,5,6,7,8,9];

// const newNums = myNums.filter((num)=>{
//     return num > 4
// })

// console.log(newNums)\



// Get name initials
// const input = "George Raymond Richard Martin";

// const str = input.split(" ")
// .map(function (word) {
//     return word[0];
// })

// .join("");

// console.log(str)



