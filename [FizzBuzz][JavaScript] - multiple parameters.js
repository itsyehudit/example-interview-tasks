fizzBuzz = (isFB) => {

  isFB = Math.round(isFB);
  isFB = Math.abs(isFB);

  if (isFB % 3 === 0 && isFB % 5 === 0) {
    document.write(`FizzBuzz `)
  } else if (isFB % 3 === 0) {
    document.write(`Fizz `);
  } else if (isFB % 5 === 0) {
    document.write(`Buzz `);
  } else {
    document.write(`No FizzBuz for you, sport! `);
  }
};

var isArrFB = [ 5, 12, 17, 90, 102 ];
take(isArrFB);
function take(params) {
  for (i=0; i<params.length; i++) {
    fizzBuzz(params[i]);
  }
}
