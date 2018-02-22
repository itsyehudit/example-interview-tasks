function leftpad(string, times, char, isLeft) {
    string = prompt('Choose a word:');
    times = parseInt(prompt('Please state a number:'));
    char = prompt('Please state a character:');
    isLeft = confirm('Would you like to have your word of choice before all the other characters?');

     if (string === null || string === '') {
       string = 'U R some Lazy Bun, Kid';
   }

    if (times === null || times === '' || isNaN(times)) {
        times = 1;
   }

    if (char === null || char === '') {
       char = '\xa0';
   }

    for (var chars = ''; chars.length < times*char.length; chars += char);

    if (char.length > 1) {
      alert('I\'ve asked you for *A* character - that means ONE, but here ya go, ye stubborn Kiddo:');
    }

    if (isLeft === false) {
      return('Your characters&word coctail is: \n' + chars + string + '.');
      }
    else {
      return('Your word&characters coctail is: \n' + string + chars + '.');
      }
    }

document.write(leftpad());
