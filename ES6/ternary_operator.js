var age = 9;

// Ternery operator structure
var type = (age >= 18) ? 'Adult' : (age<18) ? 'child':'nothing to say';
console.log(type);

var isLoggedin = true;
var access = isLoggedin ?? false;
var access = age > 18; // will return true false

console.log(access);

// Normal conditional structure
if (age>=18) {
    type = "Adult";
} else {
    type = "Child";
}