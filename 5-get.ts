export class Message {
  title: string;
  message: string;
  isSent: boolean;

  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.isSent = false;
  }

  previewMessage(): string {
    return this.message.slice(0, 10).concat("...");
  }

  //GETTER
  public get messageStatus(): string {
    const sentMessage = this.isSent ? "Has been sent." : "Has not been sent.";
    return `${this.message} | ${sentMessage}`;
  }
}

const message = new Message(
  "New Course!!! Just $9.99!!!",
  "Check out our latest course on OOP with TypeScript!"
);

message.previewMessage();
message.previewMessage();
