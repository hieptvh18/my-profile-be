import * as nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({ // config mail server
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true,
    // auth: {
    //     user: process.env.MAIL_USERNAME, //Tài khoản gmail vừa tạo
    //     pass: process.env.MAIL_PASSWORD //Mật khẩu tài khoản gmail vừa tạo
    // },
    // tls: {
    //     // do not fail on invalid certs
    //     rejectUnauthorized: false
    // }
    
});