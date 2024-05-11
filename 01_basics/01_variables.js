const accountId = 1444553
let accountEmail = "sunny21comp@student.mes.ac.in"
var accountPassword = "Sunny"
accountCity = "Navi Mumbai"
let accountState;   // undefined

// accountId = 2  // not allowed
// console.log(accountId)

accountEmail = "sunny@123"
accountPassword = "HelloWorld!"
accountCity = "Sindhudurg"

/*
Prefer not to use var
because of issue of block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountId, accountState]);