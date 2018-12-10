var compWords = [
    "Mozart",
    "Beethoven",
    "Chopin",
    "Bach",
    "Tchaikovsky",
    "Vivaldi"
]


// randomizes word selection from list //
var word = compWords[Math.floor(Math.random() * compWords.length)];
console.log(word)

// represents word with the underlined section; need to add to html somehow (use id) and beginning of my loop //
blanks = [];
for (var i = 0; i < word.length; i++) {
    blanks.push(" _ ");
}
console.log(blanks)