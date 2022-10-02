const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service: 'gmail' ,
    auth: {
      user: 'chandrashe788@gmail.com',
      pass: 'Chandu@123!',
    },
  });

  const mailOptions = {
    from: 'chandrashe788@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
