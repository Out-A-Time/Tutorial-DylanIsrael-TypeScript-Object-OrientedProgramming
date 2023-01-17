export class Animal {
    age;
    legs;
    name;
    lives = 1;
    constructor(age, legs, name) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
    meow() {
        return "ROAR! ROAR!";
    }
}
export class Cat extends Animal {
    lives = 9;
    constructor(data) {
        super(data.age, data.legs, data.name);
    }
    meow() {
        super.meow();
        super.lives;
        return "MEOW! HISS! HISS!";
    }
}
const cat = new Cat({ age: 7, legs: 4, name: "Pussy" });
console.log("Cat age: " + cat.age); //7
console.log(cat.meow()); // MEOW! HISS! HISS! - overwritten
console.log(cat.lives); // 9 - overwritten
