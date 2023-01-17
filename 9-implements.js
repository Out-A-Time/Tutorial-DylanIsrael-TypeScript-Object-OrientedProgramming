// Base / Parent Class
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
// Derived / Child Class / Same Shape
export class Dog {
    age;
    legs;
    name;
    woof() {
        return "WOOF! WOOF! WOOF!";
    }
}
