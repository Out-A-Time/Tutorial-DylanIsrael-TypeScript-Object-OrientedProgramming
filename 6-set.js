export class Message {
    title;
    message;
    _isSent;
    set isSent(value) {
        if (value === true) {
            this.deliveryDate = new Date();
        }
        this._isSent = value;
    }
    get isSent() {
        return this._isSent;
    }
    deliveryDate;
    constructor(title, message) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
    get messageStatus() {
        const sentMessage = this.isSent ? "Has been sent." : "Has not been sent.";
        return `${this.message} | ${sentMessage}`;
    }
    previewMessage() {
        return this.message.slice(0, 10).concat("...");
    }
}
const message = new Message("New Course!!! Just $9.99!!!", "Check out our latest course on OOP with TypeScript!");
message.messageStatus;
message.previewMessage();
message.isSent = true;
