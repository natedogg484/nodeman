var letter = require("./letter.js");


letter = new letter(answer, "")
 let lettersArray = [];
 let blanksArray = [];

function Word(blanks, lttr){
    this.blanks = blanks;
    this.lttr = lttr;


    function spaces() {
        for (var i = 0; i < blanks.length; i++) {
            blanksArray.push(" _ ");
        }
        console.log(blanksArray)
    }

    function letters() {
        for (var i = 0; i < lttr.length; i++) {
            lettersArray.push(lttr[i]);
        }
        console.log(lettersArray)
    }

    spaces();
    letters();

   

}



// let guess = new Word(guessWord, guessWord)

let test = new Word("alpha", "alpha")






