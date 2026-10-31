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
