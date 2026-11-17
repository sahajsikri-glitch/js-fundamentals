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

//Implementing Transfers :
// [Task-A] -> Basics
// 1. Create an array of account objects. Each object should have username and balance.
// Use .find() to get the account whose username is "sahaj" and print its balance.
const account1 = {
  username: "Sahaj",
  balance: 19000,
};
const account2 = {
  username: "Parul",
  balance: 188088,
};
const accounts = [account1, account2];
const acc = accounts.find(function (accnt) {
  if (accnt.username === "Sahaj") {
    acc.balance = accnt.balance;
  }
});
//2.Write a function that receives an amount and an account. It should return true only if
//  the amount is greater than 0 and the account balance is sufficient. Otherwise return false.
const validTrans = function (amount, account) {
  amount > 0 && account.balance >= amount ? true : false;
};
validTrans(2000, account2);
//3.You have a movements array. Write code that adds a new withdrawal of 500 at the end using push(),
//  then immediately prints the last movement using .at().
const movements = [100, 21092, -9292, 110];
const newWithdrawl = function (amount) {
  movements.push(-amount);
  console.log(movements.at(-1));
};
//4.Create two account objects. Write a condition that checks:
// Amount is positive
// Receiver account exists
// Sender has enough balance
// Sender and receiver are not the same person
const validAccounts = function (amount, senderacc, recacc) {
  const sendersAcc = senderacc.username;
  const receiversAcc = recacc.username;
  if (
    amount > 0 &&
    senderacc.balance >= receiversAcc?.balance &&
    receiversAcc != sendersAcc
  ) {
    return true;
  } else {
    return false;
  }
};
//5.Explain what event.preventDefault() does and why we use it on a form button click.
//  Then write a small example of it.

// --> event.preventDefault() is a JavaScript method that stops the browser's default behaviour for an event.

// --> But sometimes, we don't want the browser to do these things automatically.
//  We want JavaScript to handle the form submission ourselves.

// --> Why do we use it with forms?
// Imagine you have a login form.

// When someone clicks the Submit button:
// 1. The browser automatically tries to submit the form.
// 2. The page reloads.
// 3. Any JavaScript state or data that hasn't been saved may be lost.
// But suppose you want to:
// - Validate the email and password.
// - Check whether the fields are empty.
// - Display a success message without reloading the page.

// EXAMPLE :
// <!DOCTYPE html>
// <html>
// <body>

//   <form id="myForm">
//     <input type="text" id="username" placeholder="Enter name">
//     <button type="submit">Submit</button>
//   </form>

//   <script>
//     const form = document.getElementById("myForm");

//     form.addEventListener("submit", function(event) {
//       event.preventDefault();
//       const name = document.getElementById("username").value;
//       console.log("Hello " + name);
//     });
//   </script>

// </body>
// </html>

// [Task-B] -> Real-world
// Task 1: Library Borrowing System
// Write a function borrowBook(userName, bookId) that:
// Finds the user and the book
// Checks: user exists, book exists, book is available, user age ≥ 18, user has no fine
// If everything is valid → mark book as not available + push book title into user’s borrowedBooks
// Otherwise print a clear error message saying exactly what went wrong
// const books = [
//   { id: 101, title: "Atomic Habits", isAvailable: true },
//   { id: 102, title: "Deep Work", isAvailable: false },
//   { id: 103, title: "Rich Dad Poor Dad", isAvailable: true },
// ];

// const users = [
//   { name: "Sahaj", age: 20, hasFine: false, borrowedBooks: [] },
//   { name: "Teju", age: 16, hasFine: true, borrowedBooks: [] },
// ];

//1.findIndex & findLastIndex 2.some & every method

// task-[A]->Basics
//1.Create an array of numbers. Use .find() to get the first number that is divisible by both 3 and 5.
//  If none exists, print a proper message.
const numsrand = [300, 11, 129, 1290, 23, 222];
const checkdivby3and5 = numsrand.find((mov) => mov % 3 == 0 && mov % 5 == 0);
// use undefined instead of null
checkdivby3and5 != undefined
  ? checkdivby3and5
  : "no number is divisible by them";
// 2.From an array of temperatures, use .findLast() to get the last temperature that was above 40°C.
const temp = [21.9, 33.2, 83.1, 90, 100.2];
const lastHighTemp = temp.findLast((temp) => temp > 40);
console.log(lastHighTemp);
// 3.Write a function that accepts an array of numbers and returns true only if at least one number is
//   negative and all numbers are less than 1000. Use some and every.
const acceptNum = function (arr) {
  if (arr.some((num) => num < 0) && arr.every((num) => num < 1000)) {
    console.log("your num accepted");
  }
};
checkNumbers([10, -5, 200, 999]); // true
checkNumbers([10, 20, 30]); // false
// 4.Create an array of objects (products with id and price). Use .findIndex() to find the position of
//  the product with id = 105 and then remove it using splice.
const products01 = [
  { id: 101, price: 500 },
  { id: 105, price: 1200 },
  { id: 103, price: 800 },
];
const index = products01.findIndex((p) => p.id === 105);
if (index !== -1) {
  products.splice(index, 1);
}
console.log(products01);
// 5.Create a separate callback function called isLarge that checks if a value is greater than 500.
//  Then use this same callback with .some(), .every(), and .find().
const isLarge = function (value) {
  return value > 500;
};
console.log(numsrand.some(isLarge)); //true
console.log(numsrand.every(isLarge)); //false
console.log(numsrand.find(isLarge)); //1290

//Task-[B]->Real-world Tasks (Different Domains)
// Task 1: Online Course Platform
const students = [
  { id: 1, name: "Sahaj", scores: [45, 67, 89, 30] },
  { id: 2, name: "Teju", scores: [90, 92, 88, 95] },
  { id: 3, name: "Arman", scores: [40, 35, 50, 28] },
];
// Write a function checkStudentPerformance(studentId) that:

// Finds the student using .find()
// Checks if the student has at least one failing score (< 40) using .some()
// Checks if all scores are above 80 using .every()
// Prints a clear message:
// “Needs improvement” if any score is below 40
// “Excellent student” if all scores > 80
// Otherwise “Average performance”
const checkStudentPerformance = function (stId) {
  const currstudent = students.find((st) => st.id == stId);
  if (!currstudent) {
    console.log("Invalid ID");
    return;
  }

  const hasFailing = currstudent.scores.some((score) => score < 40);
  const allExcellent = currstudent.scores.every((score) => score > 80);

  if (hasFailing) {
    console.log("Needs improvement");
  } else if (allExcellent) {
    console.log("Excellent student");
  } else {
    console.log("Average performance");
  }
};
checkStudentPerformance(1);
checkStudentPerformance(2);
checkStudentPerformance(3);

// Task 2: Inventory ManagementJavaScript
const products = [
  { id: 101, name: "Laptop", stock: 5, price: 55000 },
  { id: 102, name: "Mouse", stock: 0, price: 800 },
  { id: 103, name: "Keyboard", stock: 12, price: 1500 },
  { id: 104, name: "Monitor", stock: 3, price: 12000 },
];
// Write a function manageProduct(productId) that:

// Finds the index of the product using .findIndex()
// If the product exists and stock is 0 → remove it from the array using splice
// If stock is greater than 0 → print “Product is available”
// Also check if any product in the entire list has price > 10000 using .some()
const manageProduct = function (productId) {
  const index = products.findIndex((p) => p.id === productId);
  if (index != -1) {
    console.log("Invalid");
    return;
  }
  const product = products[index];
  if (product.stock === 0) {
    products.splice(index, 1);
    console.log("Product removed because stock is 0");
  } else {
    console.log("Product is available");
  }
  const hasExpensive = products.some((p) => p.price > 10000);
  console.log("Any product above 10000?", hasExpensive);
};
manageProduct(102);
manageProduct(104);
