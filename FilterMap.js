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



// You are given an array of objects representing a group of students, each with a name and an array of test scores. Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students who have an average score above 90.
// 
// const students = [
//     { name: "Alice", scores: [90, 85, 92] },
//     { name: "Bob", scores: [75, 80, 85] },
//     { name: "Charlie", scores: [90, 95, 85] },
//     { name: "Jack", scores: [100, 100, 100] }
//   ];

//   const studentAverages = students.map(student =>{
//     const sum = student.scores.reduce((acc,score) => acc + score)
    
//     return {
//         name: student.name , average : sum / student.scores.length
//     }
//   })
//   const highPerformers = studentAverages.filter (student => student.average > 90)
//   console.log(highPerformers);


//   Note : This code is working with an array of objects representing students and their test scores, it performs two operations: calculating the average test score for each student and then filtering the students with an average test score above 90.
//   First, the map method is used to iterate through the array of students, and create a new array by applying a function to each student object. The function passed to the map method takes one argument, student, which is the current element being processed.  
//   It calculates the sum of all the test scores using the reduce method on the scores array and then returns an object with the student's name and average test score which is the sum of scores divided by the number of scores. Then, the filter method is used to iterate through the array of student averages, and create a new array by applying a function to each student object.  
//   The function passed to the filter method takes one argument, student, which is the current element being processed, and it returns a Boolean value that indicates whether the student's average test score is greater than 90 or not.



// You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50.
// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//   ];

// const productByCategory = products.reduce((acc,product) => {
//     const category = product.category;
//     if(!acc[category]){
//         acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
// },{});

// const avgPriceCategory = Object.keys(productByCategory).map(category => {
//     const sum = productByCategory[category].reduce((acc,product)=> acc + product.price,0)
//     return { category: category, average: sum / productByCategory[category].length};
// });

// const highPricedCategory = avgPriceCategory.filter(category => category.average >50)
// console.log(highPricedCategory)

// Note : This code is using JavaScript's reduce and map methods to process an array of products and group them by category, calculate the average price of each category, and then filter the categories that have an average price greater than 50.
// It starts by using the reduce method on the array of products and an empty object as an initial accumulator. The callback function passed to reduce takes in two arguments: an accumulator object and the current product.
// It assigns the product's category to a variable category, and checks if the accumulator object already contains a key for this category. If it doesn't, it creates a new key on the accumulator object with an empty array as its value. It then pushes the current product into the array of the corresponding category and returns the accumulator object.
// In the end, productsByCategory will be an object where each key is a category name, and the value is an array of products that belong to that category.
// Next, it uses Object.keys(productsByCategory) to extract the keys (category names) of the productsByCategory object and then map method to iterate over these keys and calculate the average price of products in each category. It calculates the sum of prices of all products in each category using reduce method and divides this sum with the number of products in that category.
// Finally, it filters the categories that have an average price greater than 50 using filter method


// You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.
// const employees = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
//   ];


//   const employeesByDepartment = employees.reduce((acc, employee)=> {
//     const department = employee.department;
//     if(!acc[department]){
//         acc[department]= [];
//     }

// acc[department].push(employee);
// return acc;
//   },{})

//   const avgSalaryDepartment = Object.keys(employeesByDepartment).map(department => {
//     const sum = employeesByDepartment[department].reduce((acc, employee) => acc + employee.salary,0)
//     return { department: department, average: sum / employeesByDepartment[department].length}
//   })

//   const highPaidDepartments = avgSalaryDepartment.filter(department => department.average > 65000)

//   console.log(highPaidDepartments)

//   Note : This code is working with an array of objects representing employees and their salaries and department. It performs three operations: creating a dictionary with department as the key and an array of employee objects as the value, calculating the average salary for each department, and filtering the departments with an average salary above a certain threshold.
//   First, the reduce method is used to iterate through the array of employees, and create a dictionary object by applying a function to each employee object. The function passed to the reduce method takes two arguments, acc and employee, where acc is the accumulator object, initially set to an empty object, and employee is the current element being processed.  
//   The function first gets the department from the current employee object, and if the department does not exist in the accumulator object, it creates an array for that department. Then it pushes the current employee object to the array for that department. Finally, it returns the accumulator object with the updated department and employee arrays.  
//   The Object.keys method is then used to get all the departments from the accumulator object, then the map method is used to iterate through the departments and create a new array by applying a function to each department. The function passed to the map method takes one argument, department, which is the current element being processed.  
//   It first calculates the sum of all the salary of employees in that department using the reduce method on the department array and then returns an object with the department name and average salary which is the sum of salary divided by the number of employees in that department.  
//   Finally, the filter method is used to iterate through the array of department averages, and create a new array by applying a function to each department object. The function passed to the filter method takes one argument, department, which is the current element being processed, and it returns a Boolean value that indicates whether the department's average salary is greater than 65000 or not.