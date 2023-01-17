// export class Message {
//   title;
//   message;
//   id;
// }
function Message2(title, message, id) {
    this.title = title;
    this.message = message;
    this.id = id;
}
const message1 = new Message2("Hello", "Wish you luck", 123);
console.log(message1.message);
//Wish you luck
