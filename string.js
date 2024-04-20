const name = "jenesh"
const repoCount = 50;

console.log(name + repoCount);

console.log(`hello my name is ${name.toUpperCase()} and my repo Count is ${repoCount}`);


const gameName = new String('Jenesh-123')

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3).toUpperCase());
console.log(gameName.indexOf('e'));
const newString = gameName.substring(0,5);
console.log(newString);

const newStringOne = " jenesh    raj ";

console.log(newStringOne.trim());

const url = "https://jenesh.com/jenesh%20udas"
console.log(url.replace('%20', '-'));
console.log(gameName.split('-'));



