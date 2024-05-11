let score = "33"

// const {score} = req.body

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))

/*  using Number()
"33" => 33   number
"33abc" => NaN   number(Not a Number)
"sunny" => NaN   number
null => 0        number
undefined => NaN number
true => 1        number
false => 0       number
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

// 0 ,  "" => false
// 1, "sunny" => true