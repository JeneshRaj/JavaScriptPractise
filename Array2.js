


const heros = ["superman", "spiderman", "ironman", "flash"];
const name = ["puja", "kalpana", "dinesh","jeebesh"]
// heros.push(name);
// console.log(heros);
// const people = heros.concat(name);
// console.log(people);

const allHeros = [...heros,...name]  //Spread operators

console.log(allHeros);
/*[
    'superman', 'spiderman',
    'ironman',  'flash',
    'puja',     'kalpana',
    'dinesh',   'jeebesh'
  ]*/

const another_Array = [1,2,3,[4,5,6],7,[6,7[4,5]]];

const real_another_array = another_Array.flat(Infinity);
console.log(real_another_array);

// console.log(heros.isArray("jenesh"));
console.log(Array.from("jenesh")); //converts the string into array.
console.log(Array.from({name:"jenesh"}))
 

let score = 100;
let score2 = 200;
let score3  = 300;
console.log(Array.of(score,score2,score3));  //op :- [ 100, 200, 300 ]