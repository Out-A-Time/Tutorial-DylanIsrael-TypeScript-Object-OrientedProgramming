export class Animal {
    age;
    legs;
    name;
    constructor(age, legs, name) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}
export class Cat extends Animal {
    constructor(data) {
        super(data.age, data.legs, data.name);
    }
    meow() {
        return "MEOW! HISS! HISS!";
    }
}
export class Dog {
    age;
    legs;
    name;
    woof() {
        return "WOOF! WOOF! WOOF!";
    }
}
const dog = new Dog();
const cat = new Cat({ age: 19, legs: 4, name: "Kitty" });
console.log(dog instanceof Animal);
//false
console.log(cat instanceof Animal);
//true
