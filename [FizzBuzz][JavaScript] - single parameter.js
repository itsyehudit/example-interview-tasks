fizzBuzz = (x) => {

  printFizzbuzz = (x) => {
    if (x % 3 === 0 && x % 5 === 0) {
      document.write(`FizzBuzz`)
    } else if (x % 3 === 0) {
      document.write(`Fizz`);
    } else if (x % 5 === 0) {
      document.write(`Buzz`);
    } else {
      document.write(`No FizzBuzz for you, Kiddo!`);
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

var x = prompt(`Pick a number:`);
x = x.replace(/,/, '.');
x = parseFloat(x);

fizzBuzz(x);
