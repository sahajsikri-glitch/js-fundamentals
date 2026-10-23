//simple array methods
//slice
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2)); //3, 4, 5
console.log(arr.slice(2, 4)); //3, 4
console.log(arr.slice(-2)); // 4, 5
console.log(arr.slice(-2, -4)); //[]nothing
console.log(arr.slice(-2, -1)); //4 -> correct notation
console.log(arr);
//splice
// EVERYTHING SAME ; it changes the orginal array
let arr2 = ["a", "b", "c", "d"];
arr2.splice(2);
console.log(arr2); //a, b
//reverse
arr2.reverse(); //b, a
//concat / spread(...)
const letter = arr.concat(arr2);
console.log(letter); //1,2,3,4,5,b,a

//the new at method
const arr3 = [23, 11, 64];
arr3.at(-1); // 64 way1
console.log(arr3[-1]); //undefined way2
