const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: 'quentin.rempel55@ethereal.email',
        pass: 'QhwZchdGhMgxmfTqwQ'
    }
  });

  let info = await transporter.sendMail({
    from: '"Ritu sharma 👻" <quentin.rempel55@ethereal@gmail.com>', // sender address
    to: "sharmaritud8@gmail.com", // list of receivers
    subject: "Hello User", // Subject line
    text: "Hello User", // plain text body
    html: "<b>Hello Guys!</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;