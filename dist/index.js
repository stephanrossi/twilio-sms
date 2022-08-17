"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twilio_1 = require("twilio");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const myNumber = process.env.MY_NUMBER;
if (accountSid && authToken && myNumber && twilioNumber) {
    const client = new twilio_1.Twilio(accountSid, authToken);
    try {
        client.messages
            .create({
            body: 'Teste integração SMS',
            to: myNumber,
            from: twilioNumber
        })
            .then((msg) => console.log(msg.sid));
    }
    catch (e) {
        console.log(e);
    }
}
else {
    console.error("You are missing one of the variables you need to send a message");
}
