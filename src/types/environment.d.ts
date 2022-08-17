export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TWILIO_SID: string;
            TWILIO_TOKEN: string;
            TWILIO_PHONE_NUMBER: string;
            MY_NUMBER: string;
        }
    }
}