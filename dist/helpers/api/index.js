"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = api = axios_1.default.create({
    baseURL: `https://${process.env.TWILIO_SID}:${process.env.TWILIO_TOKEN}/api.twilio.com/2010-04-01`,
});
