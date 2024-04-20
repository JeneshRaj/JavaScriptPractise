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

// Note : This code is working with a string of words and it is performing three operations on the string: splitting it, mapping the first letter of each word, and then joining them back together.
// First, the split method is used to split the input string into an array of words using a space (" ") as the separator. Then, the map method is used to iterate through the array of words and create a new array by applying a function to each word. The function passed to the map method takes one argument, word, which is the current element being processed, and it returns the first letter of the word by using the bracket notation to access the first character of the string.
// Finally, the join method is used to join all the elements of the new array of first letters back into a single string, with no separator.
// The code is also written with Arrow function which are shorthand for writing function expressions that behave similarly to regular functions while being more concise.


// const input = [
//     {
//       name: "John",
//       age: 13,
//     },
//     {
//       name: "Mark",
//       age: 56,
//     },
//     {
//       name: "Rachel",
//       age: 45,
//     },
//     {
//       name: "Nate",
//       age: 67,
//     },
//     {
//       name: "Jennifer",
//       age: 65,
//     },
//   ];


//   const obj = input.filter(function (items) {
//     return items.age > 13  && items.age< 65
//   })
 
//   console.log(obj);

// If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.
// const input = 6 ;

// const arr = new Array(input).fill(null);

// const newArr = arr.map(function (acc , index){
//     return index +1;
// })
// .reduce (function (acc, curVal){
//     return acc * curVal;
// })
// console.log(newArr)
// Note : This code is working with a number input, it creates an array of that length filled with null values and then performs two operations on that array: mapping each element to its index + 1, and then reducing the array to the product of all its elements.
// First, new Array(input).fill(null) creates a new array with the length of input and fills it with null values. Then, the map method is used to iterate through the array and create a new array by applying a function to each element. The function passed to the map method takes two arguments, currentValue and index, and it returns the value of the index plus 1, effectively mapping each element to its index + 1.
// Finally, the reduce method is used to iterate through the new array and calculate the product of all its elements. The function passed to the reduce method takes two arguments, accumulator and currentValue, and it multiplies the currentValue to the accumulator and returns the new value of the accumulator.
// The code is also written with Arrow function which are shorthand for writing function expressions that behave similarly to regular functions while being more concise.


// Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.
// const input = [
//     ["a", "b", "c"],
//     ["c", "d", "f"],
//     ["d", "f", "g"],
//   ];

//   const count = input.flat()
//                     .reduce ((acc , curVal) => {
//                         if(acc[curVal]){
//                             acc [curVal] += 1;
//                         }else {
//                             acc[curVal] = 1;
//                         }
//                         return acc;
//                     },{});
//                     console.log(count)
// 
// Note : First, the flat method is used to flatten the array of arrays into a single array of characters. Then, the reduce method is used to iterate through the flattened array and count the occurrences of each character. The function passed to the reduce method takes two arguments, accumulator and currentValue.

// The function checks if the currentValue already exists in the accumulator object, if it does, it increments the value by 1 and if not, it assigns the value 1 to that key, effectively counting the occurrences of each character in the flattened array.
// Finally, the function returns the accumulator object with the count of each character in the flattened array.