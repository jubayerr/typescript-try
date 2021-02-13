"use strict";
let age = 25;
let club = "Real Madrid";
const isFamous = false;
let famous;
function add(num1, num2) {
    return num1 + num2;
}
// function add(num1: number | string, num2: number | string) {
//     return num1 + num2
// }
add(3, 7);
// add ("jonas ", "kahnwald");
// add (3, "john")
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName("Pink", "Floyd");
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(20);
console.log('Output = ', output);
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
let multiply2;
multiply2 = (x, y) => x * y;
const numbers = [2, 3, 4, 5, 6, 7, 8];
// numbers.push(10)
// numbers.push('three')
const friends = ['Jonas', 'Martha', 'Bartoze', 'Magnus'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log("Friend with the largest name", megaName);
// object
const friend = {
    name: 'Francizka Dopler',
    age: 17
};
friend.age = 18;
// friend.age = 'twenty'
let cast = {
    series: "Dark",
    income: 420000
};
