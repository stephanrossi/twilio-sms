import { Twilio } from 'twilio';
import dotenv from 'dotenv'

dotenv.config()

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const myNumber = process.env.MY_NUMBER;

if (accountSid && authToken && myNumber && twilioNumber) {
    const client = new Twilio(accountSid, authToken)

    try {

        client.messages
            .create({
                body: 'Teste integração SMS',
                to: myNumber,
                from: twilioNumber
            })
            .then((msg: any) => console.log(msg.sid))

    } catch (e) {
        console.log(e);
    }
} else {
    console.error(
        "You are missing one of the variables you need to send a message"
    )
}