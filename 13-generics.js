export class User {
    name;
    age;
    email;
    isMale;
    classicUserData;
    mergeClassicUser(params) {
        const { name, isMale, age, email } = this;
        this.classicUserData = { name, isMale, age, email, ...params };
    }
}
const user1 = new User();
user1.mergeClassicUser({ name: { first: "Dylan", last: "Israel" } });
console.log("User 1: " + user1.classicUserData.name.first); //User 1: Dylan
const user2 = new User();
user2.mergeClassicUser({
    name: { first: "Dylan", last: "Israel", middle: "Christopher" },
});
console.log("User 2: " + user2.classicUserData.name.middle); //User 2: Dylan
