leftpad = (string = `U R some Lazy Bun, Kid`, times = 1, char = `\xa0`, isLeft = false) => {

  stringin = prompt(`Choose a word:`);
  timesin = parseInt(prompt(`Please state a number:`));
  charin = prompt(`Please state a character:`);
  isLeft = confirm(`Would you like to have your word of choice
before all the other characters?`)

  if (stringin === '') {
    stringin = string;
}

 if (timesin === '' || isNaN(timesin)) {
     timesin = times;
}

if (charin === '') {
   charin = char;
}

  var chars = charin.repeat(timesin);

  if (charin.length > 1) {
    alert(`I\'ve asked you for *A* character - that means ONE,
but here ya go, ye stubborn Kiddo:`)
  }

  if (isLeft === true) {
    return(`Your word&characters coctail is:
${stringin}${chars}.`);
    }
  else {
    return(`Your characters&word coctail is:
${chars}${stringin}.`);
    }
}

document.write(leftpad());
