'use strict';
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassangers = 1,
//   price = 199 * numPassangers
// ) {
//   //ES5
//   // numPassangers = numPassangers || 1;
//   // price = price || 199;

//   //ES6
//   const booking = {
//     flightNum,
//     numPassangers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking(`LH123`);
// createBooking(`H123`, 2, 800);
// createBooking(`J234`, 2);

// createBooking(`H234`, undefined, 100);

// const flight = `LH234`;
// const jonas = {
//   name: `Jonas Shmidman`,
//   passport: 2435663344,
// };

// const checkIn = function (flightNum, passanger) {
//   flightNum = `LH999`;
//   passanger.name = `Mr.` + passanger.name;

//   if (passanger.passport === 2435663344) {
//     alert(`Check in`);
//   } else {
//     alert(`Wrong passport!`);
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };
// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(` `);
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //High order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transfomed by: ${fn.name}`);
// };

// transformer(`JavaScript is the best!`, upperFirstWord);
// transformer(`JavaScript is the best!`, oneWord);

// const high5 = function () {
//   console.log(`👋`);
// };
// document.body.addEventListener(`click`, high5);

// [`Jonas`, `Martha`, `Adam`].forEach(high5);

//Functions returning functon
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greetArr(`Hey`);
// greeterHey(`Jonas`);
// greeterHey(`Steven`);

// greetArr(`Hello`)(`Jonas`);

// const lufthansa = {
//   airline: `Lufthansa`,
//   iataCode: `LH`,
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, `Jonas Schmedtmann`);
// lufthansa.book(635, `John Smith`);
// console.log(lufthansa);
// const eurowings = {
//   airline: `Eurowings`,
//   iataCode: `EW`,
//   bookings: [],
// };

// const book = lufthansa.book;
// //Does not work like that
// //book(23,`Sarah Williams`)
// //Call method
// book.call(eurowings, 23, `Sarha Williams`);
// console.log(eurowings);
// book.call(lufthansa, 239, `Merry Cooper`);
// console.log(lufthansa);

// const swiss = {
//   airline: `Swiss Air Lines`,
//   iataCode: `LX`,
//   bookings: [],
// };
// book.call(swiss, 539, `Mary Cooper`);
// console.log(swiss);

// //Apply method
// const flightData = [583, `George Cooper`];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// //Bind method
// //book.call(eurowings, 23, `Sarha Williams`);

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, `Steven Williams`);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23(`Mary Cooper`);
// bookEW23(`Martha Cooper`);

// //Bind with Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// //lufthansa.buyPlane();

// document
//   .querySelector(`.buy`)
//   .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// //Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// //addVat = value => value + value * 0.23
// console.log(addVAT(200));

// const addTax2 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVat2 = addTax2(0.23);
// console.log(addVat2(200));
// console.log(addVat2(23));

// const runOnce = function () {
//   console.log(`This will never run again`);
// };
// runOnce();

// //IIFE
// (function () {
//   console.log(`Thiw will never run again`);
//   const isPrivate = 23;
// })();
// //console.log(isPrivate);

// (() => console.log(`Thiw will never run again`))();

// {
//   const isPrivate = 23;
//   var notPrivate = 42;
// }
// //console.log(isPrivate);
// console.log(notPrivate);

////////////////////////

//Colusers

// const secureBooking = function () {
//   let passangerCount = 0;

//   return function () {
//     passangerCount++;
//     console.log(`${passangerCount} passangers`);
//   };
// };
// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

//Example 1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// //Re-assigned f function
// h();
// f();
// console.dir(f);

// //Example 2
// const boardPassenger = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passangers`);
//     console.log(`There are 3 groups,each with ${perGroup} passangers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassenger(180, 3);
