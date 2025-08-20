"use strict";
// function hello(name: string): string {
//   return `Hello, ${name}!`;
// }
// console.log(hello("200Lab"));
function person(name, age) {
    return `Name and Age: ${name}, ${age}`;
}
console.log(person("John", 25));
function student(name, age, grade) {
    return `${person(name, age)}, Grade: ${grade}`;
}
console.log(student("John", 25, "A"));
