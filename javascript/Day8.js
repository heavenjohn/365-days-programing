    // 8. contatenate boolean and string without getting an error

    // sample 1
let text = false
let text_1 = "this value is "

console.log(text_1 + text)

// sample 2
let text_2 = true
let text_3 = "this value is "
let result = text_3 + text_2

console.log(result)

// sample 3
let text_4 = true
let text_5 = "this value is "
let result_1 = text_5 + String(text_4)
let result_2 = `${text_5} ${text_4}`

console.log(result_1)