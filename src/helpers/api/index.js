import axios from "axios";
import dotenv from 'dotenv'

dotenv.config()

export default api = axios.create({
    baseURL: `https://${process.env.TWILIO_SID}:${process.env.TWILIO_TOKEN}/api.twilio.com/2010-04-01`,
})