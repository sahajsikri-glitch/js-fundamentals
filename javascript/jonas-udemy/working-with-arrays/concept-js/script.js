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

// Looping-arrays : forEach
//normal way -> always first index then mov in entries()
const movements = [100, -200, 400, -600];
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`${i} deposit ${mov}`);
  } else {
    console.log(`${i} withdraw ${mov}`);
  }
}
//for-each way -> it will callback function many times
// order -> always first elements then index in function arguments
movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`${i} deposit ${mov}`);
  } else {
    console.log(`${i} withdraw ${mov}`);
  }
});

//forEach with maps and sets
//NOTE : for each always takes first parameter as value then second at index
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pounding sterling"],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
  //"USD", "United States dollar"
  // "EUR", "Euro"
  // "GBP", "Pounding sterling"
});