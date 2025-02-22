const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmailAlert(to, productName, newPrice) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: `Price Drop Alert: ${productName}`,
    text: `The price of ${productName} has dropped to $${newPrice}!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent to", to);
  } catch (error) {
    console.error("Error sending email", error);
  }
}

module.exports = sendEmailAlert;
