import * as nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({ // config mail server
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 587, false for other ports
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
    
});