'use strict';
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

const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, `Jonas Schmedtmann`);
lufthansa.book(635, `John Smith`);
console.log(lufthansa);
const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

const book = lufthansa.book;
//Does not work
//Call method
book.call(eurowings, 23, `Sarha Williams`);
console.log(eurowings);
book.call(lufthansa, 239, `Merry Cooper`);
console.log(lufthansa);

const swiss = {
  airline: `Swiss Air Lines`,
  iataCode: `LX`,
  bookings: [],
};
book.call(swiss, 539, `Mary Cooper`);
console.log(swiss);

//Apply method
const flightData = [583, `George Cooper`];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
