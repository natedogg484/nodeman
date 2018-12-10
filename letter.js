

// let letterGuess = ""
function Letter(character, guess) {
    this.character = character;
    this.guess = "";


    this.winning = function () {
        if (this.character === answer) {
            this.guess = true;
        }
        else {
            this.guess = false;
        }
        this.wordGuess();

    }
    this.wordGuess = function () {
        if (this.guess === true) {
            character = character
        }
        else if (this.guess === false) {
            character = "_ "
        }
        console.log(character)
    }

}

// let test = new Letter("a", true)
// test.winning();
// test.wordGuess();

module.exports =  Letter(character, guess)



