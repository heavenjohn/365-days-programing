    // 14. split a name string into a char-array, then capitalize the first letter by overwriting char-array item zero, then reconstruct into a string

let names = "heaven"

let char = names.split("")

char[0] = char [0].toUpperCase()

let result = char.join("")

console.log(result);

