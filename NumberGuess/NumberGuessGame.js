function guessNumber() {
    var randomNum = Math.floor(Math.random() * 51);

    //output to the console for debugging
    console.log(randomNum);
    // declare a variable
    var guess;
    guess = prompt('Please enter a number between and 50');
    //console.log('Your guess is: ' + guess);

    if (guess < randomNum) {
        window.alert('Your guess is too low');
    } else if (guess > randomNum) {
        window.alert('Your guess is too high');
    }else if (guess == randomNum) {
        window.alert('Your guessed it. You win!!!');
    }  else {
        window.alert('Error!')
    }
