"use strict";
exports.__esModule = true;
exports.Message = void 0;
var Message = /** @class */ (function () {
    function Message(title, message) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
    return Message;
}());
exports.Message = Message;
var newMessage1 = new Message("I am  the title", "Here is a message");
console.log(newMessage1.message);
