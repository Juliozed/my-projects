// Promise- an object that manages asynchronous operations.
//        wrap a promise Object around {asynchronous code}
//        "i promise to return a value"
//        PENDING => resolved or rejected
//        new promise((resolve, reject) => {asynchronous code})

// Doing chores in order
// 1.walk the dof
// 2.clean the kitchen
// 3. take out the trash
// start with callbacks then promises
// wrap all in a promise, so you DON'T need a callback
// then we method chain our promises
//  at the end we return a NEW object .
// take all the synchronous code and put it in the promise
// resolve is a functions , we call that instead of the console.log
// now to reject const part

// if the first promise is not completed , the rest will not even
// calculate.

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = false;

      if (dogWalked) {
        resolve("you walked the dog 🐕");
      } else {
        reject("you didn't walk buster! ");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const didnotClean = true;

      if (didnotClean) {
        resolve("you cleaned the kitchen 🧹");
      } else {
        reject("kitchen is still dirrty");
      }
    }, 2500);
  });
}

function tittyFuckWife() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const notGetAny = true;

      if (notGetAny) {
        resolve("Yeahhhh boiiii 🍆 => 🍈");
      } else {
        reject("not good bruh");
      }
    }, 500);
  });
}
// method chaining

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return tittyFuckWife();
  })
  .then((value) => {
    console.log(value);
    console.log("day is done!");
  })
  .catch((error) => console.log(error));
