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

// The Map Method
const eurToUsd = 1.1;
// Way-1 ->using map method
// map method(call-back function) returns new array
const movmentsUsd = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(eurToUsd);
// way-02 ->using loops
const movementsUsdfor = [];
for (const mov of movements) {
  movementsUsdfor.push(mov * eurToUsd);
}
console.log(movementsUsdfor);

// eg-02
const movDescriptionn = movements.map(function (mov, i, arr) {
  if (mov > 0) {
    return `${i + 1} deposit ${mov}`;
  } else {
    return `${i + 1} withdraw ${Math.abs(mov)}`;
  }
});
console.log(movDescriptionn);
// DIFFERENCE B/W MAP & FOREACH -> map creates an array instead of just printing values like foreach

// the Filter-Method ->filter-out with condition
// way-01
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);
// way-2
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
// WHATS THE DIFFERENCE? WHY PREFER FILETER OR MAP METHOD OVER FOR LOOPS??
// coz of only one reason that with these methods we can do chaining like we did earlier in meap method
// look at it in concept-js/Script.js
const withraw = movements.filter((mov) => mov < 0);

// the Reduce-Method :
// its like a commulative sum / SNOWBALL
// way-01
const balance = movements.reduce(function (acc, mov, i, arr) {
  console.log(`${i + 1} : ${acc} , ${mov}`);
  return acc + mov;
}, 0); // this 0 is initializing accumilator value to 0

// way-02
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

// maximum value :
// CONCEPT -> its like recurrsion it returns value at each iteration like which one WINS in this case
// and at the end whos the winner is our answer
const findMax = function (movements) {
  const maximum = movements.reduce((acc, mov) => {
    if (acc > mov) {
      return acc;
    } else {
      return mov;
    }
  }, movements[0]);

  return maximum;
};
findMax(movements);

// the magic of chaining :
// PIPELINE
// eg-01
const eurotoUsd = 1.1;
const totalDeposits = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalDeposits);

//  here HOW TO CHECK the output of the preivous one in chaining ?
// ANS -> BY PASSING arr AS PARAMETER
// eg-02
const totalDeposits2 = movements
  .filter((mov) => mov > 0)
  // here whatever's the array given by filter method will be shown in ,map parameter :
  .map((mov, arr) => console.log(arr))
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalDeposits2);

// the find-method : -> returns first element that satisfies the condition
const firstWithdrawl = movements.find((mov) => mov < 0);
console.log(firstWithdrawl);
