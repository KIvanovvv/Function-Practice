'use strict';
const bookings = [];
const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  //ES5
  // numPassangers = numPassangers || 1;
  // price = price || 199;

  //ES6
  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking(`LH123`);
createBooking(`H123`, 2, 800);
createBooking(`J234`, 2);

createBooking(`H234`, undefined, 100);
