// callback hell = too many callbacks nested into one another
//  to the point it gets difficult to read.
//

//   use promises , await async to avoid this.

function task1(callback) {
  setTimeout(() => {
    console.log("task 1 complete");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("task 2 complete");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("task 3 complete");
    callback();
  }, 3000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("task 4 complete");
    callback();
  }, 1500);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("all tasks complete!");
      });
    });
  });
});
