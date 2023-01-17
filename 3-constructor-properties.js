export class Message {
    title;
    message;
    isSent;
    constructor(title, message) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
}
const newMessage1 = new Message("I am  the title", "Here is a message");
console.log(newMessage1.message);
