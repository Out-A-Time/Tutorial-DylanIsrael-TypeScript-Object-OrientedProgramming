export class Message {
    title;
    message;
    isSent;
    constructor(title, message) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
    previewMessage() {
        return this.message.slice(0, 10).concat("...");
    }
}
const message = new Message("New Course!!! Just $9.99!!!", "Check out our latest course on OOP with TypeScript!");
const result = message.previewMessage();
console.log(result);
