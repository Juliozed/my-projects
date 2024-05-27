// synchronous = executes line by line consecutively in a sequential manner.
//                code that waits for an operation to complete.

// Asynchronous = Allows multiple operations to be performed concurrently without
//                waiting. Doesnt block the execution flow and allows the program to
//                continue. (Input, Output) operations, network requsts,
//                 fetching, data.
//                handled with: callbacks, Promises, Async/Await.

// add curly braces too more than one line of code in an => function
// to be continued....

function func1(callback) {
  setTimeout(() => {
    console.log("task 1");
    callback();
  }, 3000);
}

function func2() {
  console.log("task 2");
  console.log("task 3");
  console.log("task 4");
}

func1(func2);
