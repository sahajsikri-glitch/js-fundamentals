// The simple rule
// For each lecture section:

// During the section: do 10–20 minute practice problems.

// After 2–3 related sections: build one small real-world project.

// At the end of the course: build 2 capstone projects.

// So your workflow is:

// Learn concept
// →
// tiny drill
// →
// mini-project
// →
// capstone
// Learn concept→tiny drill→mini-project→capstone

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//  Simple Array Methods | The New at Method | Looping Arrays: forEach
// Task-01[Basics]

// 1.Create an array of 6 numbers. Use slice() to get the last 3 elements
// and also get elements from index 1 to 4.
const num6 = [1, 2, 3, 4, 5, 6];
console.log(num6.slice(-3));
// 2.Create an array of colors. Use splice() to remove the first 2 colors and
// then add two new colors at the beginning.
const arrColor = ["red", "orange", "white"];
arrColor.splice(0, 2);
// 3.Take an array of names and reverse it using reverse().
// Print both original and reversed versions (note what happens to the original
const arrNames = ["Sahaj", "Teju", "siksi"];
console.log(arrNames.reverse());
console.log(arrNames);
// 4.Combine these two arrays using concat():
// const arr1 = ["HTML", "CSS"] and const arr2 = ["JavaScript", "React"]
arr1.concat(arr2);
// 5.Use the .at() method to get the last element and the second last element of an array.
arrNames.at(0);
arrNames.at(-1);
// 6.Create an array of transactions (positive and negative numbers). Use forEach to print whether
//  each one is a deposit or withdrawal along with its position.
const trans = [1, -1, 1, -1];
trans.forEach(function (trans, i) {
  if (trans > 0) {
    console.log(`${i + 1} deposit`);
  } else {
    console.log(`${i + 1} withdrawl`);
  }
});
// 7.Create a simple Map of 3 countries and their capitals.
//  Use forEach to print them in this format: Capital of India is Delhi.
const countries = new Map([
  ["India", "Delhi"],
  ["Pakistan", "affin"],
  ["afganistan", "toristan"],
]);
countries.forEach(function (value, key) {
  console.log(`capital of ${key} is ${value}`);
});

// Task-02[Real-world]
// You are building a banking feature.

// You have this array of movements:
// JavaScriptconst movements = [200, -100, 340, -150, 50, -30, 800];Write a function that:
// Creates a shallow copy of the movements using slice
// Removes the first and last movement from the copy using splice (these were entry errors)
// Uses forEach to print each remaining movement as
//  “Deposit of xxx” or “Withdrawal of xxx” with the correct position number
movements = [200, -100, 340, -150, 50, -30, 800];
const checkMovements = function (movs) {
  // 1. Shallow copy
  const movsCopy = movs.slice();

  // 2. Remove first and last (entry errors)
  movsCopy.splice(0); // remove first
  movsCopy.splice(-1); // remove last

  // 3. Print using forEach
  movsCopy.forEach(function (mov, i) {
    if (mov > 0) {
      console.log(`Movement ${i + 1}: Deposit of ${mov}`);
    } else {
      console.log(`Movement ${i + 1}: Withdrawal of ${Math.abs(mov)}`);
    }
  });
};

checkMovements(movements);
