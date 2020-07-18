console.log("Methods of Datatypes");

let str = '<h2> Hey There</h2>
<p>All Good.</p>';
console.log(str);

let name="Rio";
let skill = "hacking";
let weakness = "tokyo";

console.log("The name is" + name +". His skill is "+ skill +" and his weakness is "+weakness");

console.log('The name is $ {name}. His skill is $ {skill} and his weakness is ${weakness}.');
let text = "The quick brown fox jumps over the wall";

console.log(text);

//To change the case 
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// Accessing the index
console.log(text[5]);
console.log(text.lastIndex('o'))
console.log(text.charAt(12));
console.log(text.endWith("well"));
console.log(text.split('e'));

// substring
//splice
//replaceAll
// replaceAll

// Array
let arr1=['one','true',32,['1','2']];
let arr2=['rio','berlin','alicia'];
console.log(arr);

console.log(Array.isArray(arr));
// indexOf('Value')

console.log(arr.reverse())

console.log(arr[3]);

console.log(arr.concat(arr2));

//Appending an element
// At the start
arr2.unshift('tokyo');
console.log(arr2);
// At the end
arr2.push('helsinki);
console.log(arr2);

//removing an element 
//From the start
arr2.shift('tokyo');
console.log(arr2);


// Removing an element
// From the start
arr2.shift('tokyo');
console.log(arr2);
arr2.shift('tokyo');
console.log(arr2);


//From the end 
console.log(arr2.pop());
