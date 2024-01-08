// Given this function:


// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

// Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */

// const filterOutOdds = (num, ...Array) => {
//     return Array.filter(function(num) {
//         return num % 2 === 0
// });
// }

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

// use Math.min

// function findMin(...nums){
//     return nums.Math.min((findMin, n) => findMin + n);
// };
// no this is wrong.

// function findMin(...nums){
//     return Math.min(...nums);
// }

// with arrow function?

const findMin = (...nums) => return Math.min(...nums)

// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the
// keys and values of the first object and second object.
// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}



const mergeObjects = (object1, object2) => ({...object1, ...object2});

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of additional arguments 
// doubled.
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

// const doubleAndReturnArgs = (argArray, addedArgs) => [...argArray, ...addedArgs * 2];
// this is missing functionality to iterate over the aditional arguments. 

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]


// args.map(v => v * 2): This part uses the map function to iterate over each element in the args array. For each element (v), 
// it multiplies it by 2 (v * 2). This results in a new array containing the doubled values of the elements in the args array.

// ...args.map(v => v * 2): The spread operator (...) is used to spread the elements of the new array (doubled values) into 
// the argument list.

// ([...arr, ...args.map(v => v * 2)]): The spread operator is also used to concatenate the original array arr with the array 
// containing the doubled values of args. This results in a new array containing all the original elements of arr and the doubled values of the elements in args.

// So, in summary, the purpose of using .map here is to apply a doubling operation to each element in the args array, and the 
// spread operator is used for concise array concatenation.


// ## **Slice and Dice!**

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.


/** remove a random element in the items array
and return a new array without that item. */

// create random number around length of array. then make a copy of that array with spread which becomes a new array 
// and return that

// let randomVal = Math.random() *1;
// var y = x.splice(Math.floor(Math.random()*x.length),1);

// function removeRandom(items) {
//     const randomIndex = items.splice(Math.floor(Math.random()*items.length),1);
//     return randomIndex;

// };
// Pretty Lost Here


// FROM CHAT GPT:

// Using function declaration
// function removeRandom(items) {
//     const indexToRemove = Math.floor(Math.random() * items.length);
//     return [...items.slice(0, indexToRemove), ...items.slice(indexToRemove + 1)];
//   }
  
  // Using arrow function
  const removeRandom = (items) => {
    const indexToRemove = Math.floor(Math.random() * items.length);
    return [...items.slice(0, indexToRemove), ...items.slice(indexToRemove + 1)];
  };
  



/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

const extend = (array1, array2) => {
    return [...array1, ...array2]
    };

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }

// const addKeyVal = (obj, key, val) => {
//     const obj2 = {...obj};
//     return {...obj2, key, val}
// }
// WRONG

const addKeyVal = (obj, key, val) => {
    let obj2 = {...obj}
    obj2 [key] = val;
    return obj2;
}
// I copied this from the Solution page. 



/** Return a new object with a key removed. */

// use delete operator
// create copy of obj?

// function removeKey(obj, key) {
// }

// const removeKey = (obj, key) => {
//     let objCopy = {...obj};
//     delete objCopy.key;
//     return objCopy;
// }
// wrong, did not work. 
// From Solutions:

const removeKey = (obj, key) => {
    let objCopy = {...obj }
    delete objCopy[key]
    return objCopy;
}


/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {
// }

// const combine = (obj1, obj2) => {
//     let obj1Copy = {...obj1}
//     let obj2Copy = {...obj2}
//     return {...obj1Copy, ...obj2Copy};
// }
// wrong. I guess we don't need to copy the objects because they aren't being iterated over, merely concatonated?

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}



/** Return a new object with a modified key and value. */

function update(obj, key, val) {

}

// TBH I don't really understand the used of 'modified' here. Modified to what?