export class Animal {
  age: number;
  legs: number;
  name: string;
  lives = 1;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }

  meow(): string {
    return "ROAR! ROAR!";
  }
}

export class Cat extends Animal {
  lives = 9;
  constructor(data: { age: number; legs: number; name: string }) {
    super(data.age, data.legs, data.name);
  }

  meow(): string {
    super.meow();
    super.lives;
    return "MEOW! HISS! HISS!";
  }
}

const cat = new Cat({ age: 7, legs: 4, name: "Pussy" });
console.log("Cat age: " + cat.age); //7
console.log(cat.meow()); // MEOW! HISS! HISS! - overwritten
console.log(cat.lives); // 9 - overwritten
