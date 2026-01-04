import nodemailer from 'nodemailer';

import { EMAIL_USER, EMAIL_PASSWORD } from './env.js';

export const accountMail = EMAIL_USER;

if (!EMAIL_USER || !EMAIL_PASSWORD)
{
    throw new Error("Email credentials are not defined in environment variables");
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
    }
});

export default transporter;