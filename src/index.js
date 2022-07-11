import twilio from "twilio";
import dotenv from 'dotenv'

dotenv.config()

const client = new twilio(`${process.env.TWILIO_SID}`, `${process.env.TWILIO_TOKEN}`)

try {
    client.messages
        .create({
            body: 'Teste integração SMS',
            to: '+5531993163821',
            from: `${process.env.TWILIO_PHONE_NUMBER}`
        })
        .then(msg => console.log(msg.sid))

} catch (e) {
    console.log(e);
}   