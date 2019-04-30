
// Compiling your code (tsc greeter.ts)
// function greeter(person) {
//     return "Hello, " + person;
// }
// let user = "tuannt";
// document.body.innerHTML = greeter(user);

// Type annotations
// function greeter(person: string) {
//     return "Hello, " + person;
// }
// let user = "tuannt";
// document.body.innerHTML = greeter(user);

// Interfaces
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = { firstName: "Tuan", lastName: "Nguyen" };
// document.body.innerHTML = greeter(user);

// Classes
class Student {
    fullName: string;
    constructor (public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Nguyen", "The", "Tuan");
document.body.innerHTML = greeter(user);
