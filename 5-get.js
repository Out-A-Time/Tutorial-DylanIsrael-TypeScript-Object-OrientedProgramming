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
    //GETTER
    get messageStatus() {
        const sentMessage = this.isSent ? "Has been sent." : "Has not been sent.";
        return `${this.message} | ${sentMessage}`;
    }
}
const message = new Message("New Course!!! Just $9.99!!!", "Check out our latest course on OOP with TypeScript!");
message.previewMessage();
message.previewMessage();
