export class User<T> {
  name: string;
  age: number;
  email: string;
  isMale: boolean;
  public classicUserData: T;

  public mergeClassicUser(params: T): void {
    const { name, isMale, age, email } = this;

    this.classicUserData = { name, isMale, age, email, ...params };
  }
}

interface ClassicUser {
  name: { first: string; last: string };
}

interface ClassicUser2 {
  name: { first: string; middle: string; last: string };
}

const user1 = new User<ClassicUser>();
user1.mergeClassicUser({ name: { first: "Dylan", last: "Israel" } });
console.log("User 1: " + user1.classicUserData.name.first); //User 1: Dylan

const user2 = new User<ClassicUser2>();
user2.mergeClassicUser({
  name: { first: "Dylan", last: "Israel", middle: "Christopher" },
});
console.log("User 2: " + user2.classicUserData.name.middle); //User 2: Christopher
