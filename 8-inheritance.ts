// Base / Parent Class
export class Animal {
  age: number;
  legs: number;
  name: string;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }
}

// Derived / Child Class(s)
export class Dog extends Animal {
  woof(): string {
    return "WOOF! WOOF! WOOF!";
  }
}

export class Cat extends Animal {
  meow(): string {
    return "MEOW!";
  }
}

const dog = new Dog(2, 4, "Zorro");
dog.age;
dog.woof();
const cat = new Cat(19, 4, "Kitty");
cat.legs;
cat.meow();
