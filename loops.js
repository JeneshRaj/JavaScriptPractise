//************for loop**********/


//syntax 
// for (let i = 0; j < array.length; index++) {
//     const element = array[index];
    
// }


// for(i=0 ; i<=10 ; i++){
//     console.log(i)
// }

// for (i = 0 ; i<=10 ; i++){
//     const element = i;
//     if(element == 5 ){
//         console.log("5 is the number ");
//     }
//     console.log(element)
// }


// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop ${i}`)
//     for (let j = 0; j <=10; j++) {
//     //    console.log(`Inner loop ${j} and inner loop ${i}`)
//     console.log(i + '*' + j + '=' + i*j)
        
//     }
   
    
// }

let myArray = ["jenesh","aiman","latifa", "Rikesh"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element)
    
}

// Break and Continue

for (let index = 1; index <= 20; index++) {
    if(index ==5 ){
        console.log("5 is detected");
        break
    }
    console.log(`value of i is ${index}`)
    
}

for (let index = 1; index <= 20; index++) {
    if(index ==5 ){
        console.log("5 is detected");
        continue
    }
    console.log(`value of i is ${index}`)
    
}






