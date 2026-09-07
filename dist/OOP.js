"use strict";
// Usig Arrow Function pass an Object.
Object.defineProperty(exports, "__esModule", { value: true });
const Students = (name, age, email) => {
    const obj = { name, age, email };
    return obj;
};
const stu1 = Students("Rafi", 23, "Rafi@email.com");
const stu2 = Students("Safi", 20, "Safi@email.com");
const stu3 = Students("Kafi", 21, "Kafi@email.com");
const stu4 = Students("Jafi", 24, "Jafi@email.com");
const stu5 = Students("Hafi", 22, "Hafi@email.com");
// How to decler an Class and Constructor on OOP
class Student {
    name;
    age;
    email;
    marks;
    constructor(name, age, email, marks) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.marks = marks;
    }
    // Method in OOP
    getInfo() {
        const info = `Name:${this.name}\nEmail: ${this.email}`;
        return info;
    }
    // to show the polymorpisom and method overriding
    printer(greatin) {
        console.log("It is the Student class");
    }
}
const Rafi = new Student("Rafi", 19, "Rafi@gmail.com", 80);
Rafi.printer("Hello");
// console.log(Rafi);
// console.log(Kafi);
class chadokan {
    title;
    solditem = [];
    constructor(title) {
        this.title = title;
    }
    buy(name, price) {
        this.solditem.push([name, price]);
    }
}
const shop1 = new chadokan("Tea shop");
shop1.buy("tea", 15);
shop1.buy("cake", 34);
shop1.buy("biscute", 60);
//console.log(shop1.Bill())
//Access-Modifier & Encapsulation & inharitance
class bekas extends Student {
    pin;
    balance;
    constructor(name, age, email, pin, marks, balance) {
        super(name, age, email, marks);
        this.pin = pin;
        this.balance = balance;
    }
    getbalance(pin) {
        if (this.pin === pin) {
            return this.balance;
        }
        return "Error in pin";
    }
    get pins() {
        return this.pin;
    }
    set pins(value) {
        if (value === 1234) {
            throw new Error("Set and strong passoword");
        }
        this.pin = value;
    }
    // To show the polymorphisom and the method overriding
    printer(greatin) {
        console.log("It is the bekas class");
    }
}
const check = new bekas("Ovi Shukla Das", 23, "Ovi@gmail.com", 80, 1412, 10000);
// check.printer("Hello");
//# sourceMappingURL=OOP.js.map