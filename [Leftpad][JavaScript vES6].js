leftpad = (string = `U R some Lazy Bun, Kid`, times = 1, char = `\xa0`, bool = false) => {

  stringin = prompt(`Choose a word:`);
  timesin = parseInt(prompt(`Please state a number:`));
  charin = prompt(`Please state a character:`);
  bool = confirm(`Would you like to have your word of choice
before all the other characters?`)

  if (stringin === null || stringin === '') {
    stringin = string;
}

 if (timesin === null || timesin === '' || isNaN(timesin)) {
     timesin = times;
}

if (charin === null || charin === '') {
   charin = char;
}

  var chars = charin.repeat(timesin);

  if (charin.length > 1) {
    alert(`I\'ve asked you for *A* character - that means ONE,
but here ya go, ye stubborn Kiddo:`)
  }

  if (bool === true /* || bool === undefined*/) {
    return(`Your word&characters coctail is:
${stringin}${chars}.`);
    }
  else {
    return(`Your characters&word coctail is:
${chars}${stringin}.`);
    }
}

alert(leftpad());
