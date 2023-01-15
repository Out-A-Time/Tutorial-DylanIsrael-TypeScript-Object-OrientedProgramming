export class Message {
  title: string;
  message: string;
  isSent: boolean;

  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.isSent = false;
  }
}

const newMessage1 = new Message("I am  the title", "Here is a message");

console.log(newMessage1.message);
