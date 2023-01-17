export class User {
    firstName;
    lastName;
    email;
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    doesEmailMatch(email) {
        return this.email === email;
    }
}
