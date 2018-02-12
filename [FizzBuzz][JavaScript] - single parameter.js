fizzBuzz = (isFB) => {

  isFB = parseInt(prompt(`Pick a number:`));
  isFB = Math.round(isFB);
  isFB = Math.abs(isFB);

  if (isFB % 3 === 0 && isFB % 5 === 0) {
    document.write(`FizzBuzz`)
  } else if (isFB % 3 === 0) {
    document.write(`Fizz`);
  } else if (isFB % 5 === 0) {
    document.write(`Buzz`);
  } else {
    document.write(`No FizzBuz for you, Kiddo!`);
  }
};

fizzBuzz();
