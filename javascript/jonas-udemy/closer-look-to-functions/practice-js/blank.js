"use strict";

////default parameters --> fnction returning function
//[A]TASK - 01 :Basics
// 01.Create a function createOrder with three parameters: item, quantity = 1, price = 100.
// It should return an object with these values. Test it with different numbers of arguments.
const createOrder = function (item, quantity = 1, price = 100) {
  const order = {
    item,
    quantity,
    price,
  };
  return order;
};
createOrder(1);
createOrder(1, 2);
createOrder(1, undefined, 3);

// 02.Create a function that receives an object as a parameter and changes one of its properties.
// Then log the original object to see what happens (Value vs Reference).
const sahaj = {
  name: "soi",
  class: 9,
};
function hey(name) {
  name.name = "noi";
}
hey(sahaj);

// 03.Write a simple higher-order function called calculate that takes two numbers and a callback function.
// The callback should do addition, subtraction, or multiplication.
// const calculation = function (a, b, operation) {
//   if (operation == "+") {
//     return function () {
//       console.log(a + b);
//     };
//   } else if (operation == "-") {
//     return function () {
//       console.log(a - b);
//     };
//   } else {
//     return function () {
//       console.log(a * b);
//     };
//   }
// };
// calculation(2, 5, "+");
// calculation(2, 3, "*");

//MISTAKE :
// Your version returns functions but you never called them.
// Correct way (accepting callback):
const calculate = function (a, b, operation) {
  return operation(a, b);
};

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(2, 5, add)); // 7
console.log(calculate(2, 3, multiply)); // 6

// 04.Create a function greet that returns another function.
// The inner function should take a name and print a greeting.
const greety = function (wish) {
  return function (name) {
    console.log(`${wish} ${name}`);
  };
};
greety("HEY")("teju");

// 05.Convert the above greet function into arrow function form.
const greet = (wish) => (name) => console.log(`${wish} ${name}`);

// 06.Create a callback function that converts a string to uppercase, then pass it to a
// higher-order function that applies it and also prints the name of the callback function.
const UpperConvertName = function (str) {
  return str.toUpperCase();
};
const returnFunc = function (fn, name) {
  console.log(fn); //mistake this does nothing
  //correct version:
  console.log(fn.name);
  console.log(fn(name));
  console.log(fn); // prints the whole function code
  console.log(fn.name); // prints: "UpperConvertName"
  console.log(fn(name)); // prints: "SAHAJ"
};
returnFunc(UpperConvertName, "sahaj");

// 07.Make a function that accepts a callback and calls it multiple times (for example 3 times).
const hello = function () {
  console.log("hello boy");
};
function multipleCall(fn, times) {
  while (times != 0) {
    fn();
    times--;
  }
}
multipleCall(hello, 4);

// [B]TASK-02: Real-world Tasks
// Create a higher-order function called processStudents that receives an array of
// student objects and a callback function.Each student object looks like:

// { name: "Sahaj", marks: 85 }

// The callback should decide what to do with each student
// (for example: print only students with marks > 80, or add "Passed" / "Failed").
const student = { name: "Sahaj", marks: 85 };
const callBackFunc = function () {
  student.marks >= 80 ? console.log(student.name) : console.log("oops");
};
const processStudents = function (studentsObj, callBack) {
  return callBack;
};

// WROORROROORNNGGGGGG :
// CORRECT VERSION :
const students = [
  { name: "Sahaj", marks: 85 },
  { name: "Teju", marks: 72 },
  { name: "Arman", marks: 91 },
];

// const processStudents = function (studentsArr, callback) {
//   for (const student of studentsArr) {
//     callback(student);
//   }
// };

// const printToppers = function (student) {
//   if (student.marks > 80) {
//     console.log(`${student.name} is a topper`);
//   }
// };

// processStudents(students, printToppers);
