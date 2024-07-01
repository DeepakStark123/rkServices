// controllers/emailController.js
const nodemailer = require('nodemailer');

exports.sendEmail = (req, res) => {
    const { name, email, applicationType, comments } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: applicationType,
        text: `Name: ${name}\nEmail: ${email}\nComments: ${comments}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.send('Email sent successfully!');
    });
};
