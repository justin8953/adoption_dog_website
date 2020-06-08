var nodemailer = require("nodemailer");

module.exports.create = (req, res) => {
  var body = req.body;
  console.log(body);
  var mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "<your email>",
      pass: "<your password>"
    }
  });
  mailTransport.sendMail(
    {
      from: "<your email>",
      to: "<to email>",
      subject: `${body.applicant} Adoption Application`,
      html: "<h1>Hello</h1><p>Nice to meet you.</p>"
    },
    function(err) {
      if (err) {
        console.log("Unable to send email: " + err);
      }
    }
  );
  res.status(200).send("send");
};
