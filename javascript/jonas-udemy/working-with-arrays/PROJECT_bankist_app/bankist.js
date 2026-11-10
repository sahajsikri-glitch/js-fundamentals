"Use strict";

//one of the most common ways of organizing data in js -: using objects & arrays
const account1 = {
  owner: "Parul Sikri",
  movements: [100, 500, -200, 1850, -4000],
  interest: 0.5,
  pin: 1111,
};
const account2 = {
  owner: "Jonas Schmedtmann",
  movements: [1000, 5050, 3000, -8888, 100, -120],
  interest: 0.7,
  pin: 2222,
};
const account3 = {
  owner: "Tejaswani Singh",
  movements: [50, 10, 99, -99, 500, 350, -400],
  interest: 0.3,
  pin: 3333,
};
const account4 = {
  owner: "Sandeep Sikri",
  movements: [1000, 10000, -7000, 3000, -7000],
  interest: 1,
  pin: 4444,
};
const accounts = [account1, account2, account3, account4];

// Elements :
// label is all the things where we simply want to put some text in future
//  as per the user which is mutable or somethin like that
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Creating DOM elements :
const displayMov = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    // veryyrey IMPORTANT//
    const type = mov > 0 ? "deposit" : "withdrawl";
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    // HOW TO LINK JS WITH HTML : ####IMPMIMIMIMPPPP
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMov(account1.movements);

// Computing Usernames
// eg-01
const createUserName = function (user) {
  (user
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word[0];
    }),
    join(""));
};
createUserName("Jonas Schmedtmann");
// // eg-02
// const createUserName2 = function (accs) {
//   accs.forEach(function (acc) {
//     ((acc.username = acc.owner
//       .toLowerCase()
//       .split(" ")
//       .map(function (word) {
//         return word[0];
//       })),
//       join(""));
//   });
// };
// createUserName2(accounts);
// console.log(accounts);

const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  account.balance = balance;
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov >= 0)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumIn.textContent = `${incomes} 💶`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumOut.textContent = `${Math.abs(out)} 💶`;

  const interest = acc.movements
    .filter((mov) => mov >= 0)
    .map((mov) => (mov * acc.interest) / 100)
    .filter((int) => int > 1)
    .reduce((acc, curr) => curr + acc, 0);

  labelSumInterest.textContent = `${interest} 💶`;
};

// // way-01
// const acc = accounts.find((acc) => acc.owner == "Parul Sikri");
// console.log(acc);
// // way-02
// for (const acc of accounts) {
//   return acc.owner == "Parul Sikri";
// }

// implementing login
// Event Handler :
let currAccount;
btnLogin.addEventListener("click", function (event) {
  // it'll not log into console because of the <form><form/> we used
  // in html in btnLogin elemnt ->it'll submit it right away
  // SO WE USE preventDefault TO PREVENT IT FROM SUBMISSION
  event.preventDefault();

  currAccount = accounts.find((acc) => acc.user === inputLoginUsername.value);
  console.log(currAccount);

  // using null-chaining operator coz what if invalid pin?
  if (currAccount?.pin == Number(inputLoginPin.value)) {
    // now refer flow chart what to do?
    // Display UI
    labelWelcome.textContent = "Welcome Back";

    containerApp.style.opacity = 100; //doubt in this line

    // clearing input field one's user logged in
    inputLoginPin = inputLoginUsername = " ";
    inputLoginPin.blur();
    // display balance
    calcDisplayBalance(currAccount.movements);
    //display summary
    calcDisplaySummary(currAccount);
    // display movements
    displayMov(currAccount.movements);
  }
});
// imp -> in next class check if everything's working -> ASK GPT

// Implementing Transfers
btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recAacc = accounts.find(
    (acc) => acc.username === inputTransferTo.value,
  );

  if (
    amount > 0 &&
    recAacc &&
    currAccount.balance >= amount &&
    recAacc.username !== currAccount.username
  ) {
    // Doing the transfer :
    console.log("Valid transaction");
    currAccount.movements.push(-amount);
    recAacc.movements.push(amount);
  } else {
    console.log("Invalid transaction");
  }
});
