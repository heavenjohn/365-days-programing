// capitalize(uppercase first letter of each word) strings using built in function


// This is code is for beginner or basic way 
let text = "heaven john"
let result_1 = text[0].toUpperCase() + text.slice(1)

console.log(result_1);

// this code is not for beginner
let string = "hello world";
let result = string
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(result);

