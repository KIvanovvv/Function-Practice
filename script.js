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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(' ');
};

//High order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transfomed by: ${fn.name}`);
};

transformer(`JavaScript is the best!`, upperFirstWord);
transformer(`JavaScript is the best!`, oneWord);

const high5 = function () {
  console.log(`👋`);
};
document.body.addEventListener(`click`, high5);

[`Jonas`, `Martha`, `Adam`].forEach(high5);
