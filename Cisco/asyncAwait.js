//  Async/Await = async = makes a function return a promise
//                await = makes an async function wait for a promise

//              allows you to write asynchronous code in synchronous
//              manner. Async doesn't have resolve or reject parameters.
//              Everything after Await is placed in an event queue.

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

// async **************
async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const tittyFuckWifeResult = await tittyFuckWife();
    console.log(tittyFuckWifeResult);

    console.log("day is done");
  } catch (error) {
    console.error();
  }
}

doChores();
