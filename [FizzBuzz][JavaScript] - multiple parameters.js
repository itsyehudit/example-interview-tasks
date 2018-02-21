fizzBuzz = (x) => {

  printFizzbuzz = (x) => {
    if (x % 3 === 0 && x % 5 === 0) {
      document.write(`FizzBuzz `)
    } else if (x % 3 === 0) {
      document.write(`Fizz `);
    } else if (x % 5 === 0) {
      document.write(`Buzz `);
    } else {
      document.write(`No FizzBuzz for you, Kiddo! `);
    }
  }

  if (x % 1 === 0) {
    printFizzbuzz(x);
  } else if (x === '' || isNaN(x)) {
      document.write(`Improper value entered, try again.`);
  } else {
    q = confirm(`Would you like to round your number (${x})?`);
    if (q === true) {
      updown = confirm(`Round up?`);
      if (updown === true) {
        alert(`Your number (${x}) will be rounded up.`)
        x = Math.ceil(x);
      } else {
        alert(`Your number (${x}) will be rounded down.`)
        x = Math.floor(x);
      }
    }
    printFizzbuzz(x);
  }
};

var repeat = true;
var array = [];
while (repeat === true) {
  var maybeFloat = (prompt(`Pick a number:`));
  maybeFloat = maybeFloat.replace(/,/, '.');
  maybeFloat = parseFloat(maybeFloat);
  array.push(maybeFloat);
  repeat = confirm('Would you like to add another number?');
}
var arrLength = array.length;
for (var i = 0; i < arrLength; i++) {
  fizzBuzz(array[i]);
}
