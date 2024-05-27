// fisher-yates algo.
// how to shuffle a deck of cards

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

shuffle(cards);

console.log(cards);

// loop through the deck decrementing order..
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}

// just hit save and see it. 
