const nodemailer = require('nodemailer');

// Configurez le transporteur pour envoyer les emails
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.APP_EMAIL_ADDRESS,
        pass: process.env.APP_EMAIL_PASSWORD,
    },
});

const sendEmail = (to, subject, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    html: html,
};
    return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };