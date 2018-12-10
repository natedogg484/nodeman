var inquirer = require("inquirer");

let letterGuesss = ""
var letter = require("./letter.js");
var word = require("./word.js");

var compWords = [
    "Mozart",
    "Beethoven",
    "Chopin",
    "Bach",
    "Tchaikovsky",
    "Vivaldi"
]

var guessWord = compWords[Math.floor(Math.random() * compWords.length)];
console.log(guessWord)



inquirer
    .prompt([
        {
            type: "confirm",
            name: "play",
            message: "Would you like to play hangman?"

        }
    ]
    ).then(function (response) {
        console.log(response)

        if (response.play === true){
            console.log("Awesome! We'll choose a word for you!")
            console.log("Start guessing your letters!")
            inquirer.prompt(
                [
                    {
                        type: "prompt",
                        name: "guess",
                        message: "guess your letter!"
                    }
                ]
            ).then(function(selection){
                console.log(selection)
            })
        }
        else{
            console.log("Alright, maybe later then...")
        }
    })