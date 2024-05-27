// closure = a function defined inside of another function
// the inner function has access to the variables
// and scope of the outer function.
// allow for private variables and state maintenence
// used frequently in JS frameworks: react, vue, ang.

//  put it all in a closure so nobody can mess with the score

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(`the final score is ${game.getScore()}pts`);
