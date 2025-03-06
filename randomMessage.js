//Generate a program that has random phrases related to videogames 

const games = ["R6", "GOW", "The Witcher", "AC", "Batman", "Halo", "Elden Ring"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const phrases = ["I feel like playing", "I wish I could play", "are for"];

//Returns a random element of a given array 
const randomGenerator = (array) => { 
    const randNumber = Math.floor(Math.random() * array.length);
    return array[randNumber];
};


const randomPhrase = (gameArray, dayArray, phraseArray) => {
    const game = randomGenerator(gameArray);
    const phrase = randomGenerator(phraseArray);
    const day = randomGenerator(dayArray);

    return phrase === "are for" ? `${day}s ${phrase} ${game}` : `${phrase} ${game} on ${day}`;
};

console.log(randomPhrase(games, days, phrases));