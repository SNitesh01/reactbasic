const nodemailer = require('nodemailer')


var transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "itskynitesh@gmail.com",
    pass: "Nits@2022"
  }
});

// const transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: process.env.MAILTRAP_USERNAME,
//     pass: process.env.MAILTRAP_PASSWORD,
//   },
// });



module.exports = transport;