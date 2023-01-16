"use strict";
exports.__esModule = true;
exports.Message = void 0;
var Message = /** @class */ (function () {
    function Message(title, message) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
    Object.defineProperty(Message.prototype, "isSent", {
        get: function () {
            return this._isSent;
        },
        set: function (value) {
            if (value === true) {
                this.deliveryDate = new Date();
            }
            this._isSent = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "messageStatus", {
        get: function () {
            var sentMessage = this.isSent ? "Has been sent." : "Has not been sent.";
            return "".concat(this.message, " | ").concat(sentMessage);
        },
        enumerable: false,
        configurable: true
    });
    Message.prototype.previewMessage = function () {
        return this.message.slice(0, 10).concat("...");
    };
    return Message;
}());
exports.Message = Message;
var message = new Message("New Course!!! Just $9.99!!!", "Check out our latest course on OOP with TypeScript!");
message.messageStatus;
message.previewMessage();
message.isSent = true;
