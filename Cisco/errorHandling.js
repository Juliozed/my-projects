// Error = an object that is created to represent a problem that
//          occurs. Occur often with the user input or establsihing
//          a connection.
//          errors can occur by many ways , Network errors,
//           promise rejections, security errors
//           console.error !!!!!!!

// we handles these errors by try, catch, finally.
//  try{} = encloses code that might potentially cause an error
//  catch{} = catch and handle any thrown error from try{}.
//  finally{} = optional. always executes. Used mostly for clean up
//              ex. close files, close connections, release sources.

// try {
//   console.log("hello");
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log("this always executes");
// }

// console.log("you have reached the end");

//  error user input

try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));

  if (divisor == 0) {
    throw new Error("you cant divide by zero1");
  }

  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Please enter a number");
  }
  1;

  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
}

console.log(" end");
