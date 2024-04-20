/// ************for of Loop***********///////

// const arr = [1,2,3,4,5,6,7,8];

// for (const num of arr) {
//     console.log(num);
// }


// const name = "jenesh";
// for (const greet of name) {
//     console.log(`e3ach char is ${greet}`)
    
// }

// Maps

// const map = new Map()
// map.set('NP',"Nepal")
// map.set('USA',"America")
// map.set('Fr',"France")

// console.log(map)
// for (const [key, value] of map) {
//     console.log(key, ':-' , value)
    
// }


// const myObject = {
//     js : "javaScript",
//     cpp : "c plus plus",
//     pi : "python"
// }

// for (const [key,value] of myObject) {
//     console.log(key , ':-', value)
    
// }

// for (const key in myObject) {
//    console.log(`${key} shortcut for ${myObject[key]}`)
// }

//Note : for of loop prints the values in the loop but forin loop only prints the array located values 

// const programming = ["js","pi","java","cpp"];

// for (const language in programming) {
//     console.log(`these are the most popular programming languages u can learn in 2023 ${language}`);
//     console.log(programming[language]);//can be used in this ways to print the value in for in loops
// }
// const map = new Map()
// map.set('NP',"Nepal")
// map.set('USA',"America")
// map.set('Fr',"France")
// for (const key in map) {
//     console.log(key)

// }


///For Each loops
const coding = ["js", "ruby" , "java", "cpp", "python"];

// coding.forEach( (item)=> {
// console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)


// coding.forEach(item,index,arr) => {
//     console.log(item,index,arr);
// }

const myCoding = [
    {
        languageName : "java",
        fileName : "java"
    },

    {
        languageName : "javaScript",
        fileName : "js"
    },
    {
        languageName : "Python",
        fileName : "py"
    },

]
myCoding.forEach((item) => {
    console.log(item.fileName)

})