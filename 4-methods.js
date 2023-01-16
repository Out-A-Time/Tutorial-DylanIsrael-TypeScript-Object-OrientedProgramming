"use strict";
exports.__esModule = true;
exports.Message = void 0;
var Message = /** @class */ (function () {
    function Message(title, message) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
    Message.prototype.previewMessage = function () {
        return this.message.slice(0, 10).concat("...");
    };
    return Message;
}());
exports.Message = Message;
var message = new Message("New Course!!! Just $9.99!!!", "Check out our latest course on OOP with TypeScript!");
var result = message.previewMessage();
console.log(result);
