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


// ******************Operations****************

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello"
let str2 = " sunny"
str3 = str1 + str2
console.log(str3)

// console.log("1" + 2)   => 12
// console.log(1 + "2")   => 12
// console.log("1" + 2 + 2)  => 122
// console.log(1 + 2 + "2")  => 32