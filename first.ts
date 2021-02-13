let age: number = 25;

let club: string = "Real Madrid";

const isFamous: boolean = false;

let famous: boolean;

function add(num1: number, num2: number) {
    return num1 + num2
}

// function add(num1: number | string, num2: number | string) {
//     return num1 + num2
// }

add(3, 7);
// add ("jonas ", "kahnwald");
// add (3, "john")

function fullName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
}

const user = fullName("Pink", "Floyd")


function doubleItAndConsole(num: number): void {
    const result = num * 2;
    console.log(result);
}

const output = doubleItAndConsole(20)
console.log('Output = ', output);

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(25, 6));

let multiply2: (x: number, y: number) => number;
multiply2 = (x, y) => x * y;

const numbers = [2, 3, 4, 5, 6, 7, 8]
// numbers.push(10)
// numbers.push('three')

const friends: string[] = ['Jonas', 'Martha', 'Bartoze', 'Magnus'];
let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log("Friend with the largest name", megaName);

// object

const friend: { name: string, age: number } = {
    name: 'Francizka Dopler',
    age: 17
}

friend.age = 18;
// friend.age = 'twenty'

let cast: {
    series: string;
    income: number
} = {
    series: "Dark",
    income: 420000
}

// interface

interface Player {
    club: string,
    name: string,
    salary: number,
    wife: string,
    isPlaying: boolean
}

const cristianoRonaldo: Player = {
    name: "Critiano Ronaldo",
    club: "Real Madrid",
    salary: 450000,
    wife: "Georgina Rodríguez",
    isPlaying: true
}

function getBonus(player: Player) {
    return player.salary * 0.1;
}

// class

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name
    }
}
