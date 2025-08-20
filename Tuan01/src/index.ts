// function hello(name: string): string {
//   return `Hello, ${name}!`;
// }
//
// console.log(hello("200Lab"));

// // 1. Person class
// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     displayInfo(): void {
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }

// const p1 = new Person("Huy", 22);
// p1.displayInfo();

// // 2.
// class Student extends Person {
//     grade: string;

//     constructor(name: string, age: number, grade: string) {
//         super(name, age);
//         this.grade = grade;
//     }

//     displayAllInfo(): void {
//         console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
//     }
// }

// const s1 = new Student("An", 20, "A");
// s1.displayAllInfo();

// 3.
// class Car {
//     brand: string;
//     model: string;
//     year: number;

//     constructor(brand: string, model: string, year: number) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     showInfo(): void {
//         console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
//     }
// }

// const c1 = new Car("Toyota", "Vios", 2022);
// c1.showInfo();

// 4.
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(5, 10);
console.log("Area:", rect.area());
console.log("Perimeter:", rect.perimeter());

// 5.
// class BankAccount {
//     balance: number;

//     constructor(balance: number) {
//         this.balance = balance;
//     }

//     deposit(amount: number): void {
//         this.balance += amount;
//         console.log(`Deposited: ${amount}, New balance: ${this.balance}`);
//     }

//     withdraw(amount: number): void {
//         if (amount > this.balance) {
//             console.log("Insufficient funds!");
//         } else {
//             this.balance -= amount;
//             console.log(`Withdrew: ${amount}, New balance: ${this.balance}`);
//         }
//     }
// }

// const acc = new BankAccount(500);
// acc.deposit(200);
// acc.withdraw(1000);
// acc.withdraw(300);
