// Compiling your code
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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Nguyen", "The", "Tuan");
document.body.innerHTML = greeter(user);
