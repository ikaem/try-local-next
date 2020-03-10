const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "MailJet",
    auth: {
        user: "7f857282a3f678db6fddb5003cb9e5d3",
        pass: "6b66b22990cf0b506c02023ee66abdbf",
    },
    // tls: {
    //     rejectUnauthorized: false,
    // }
})

export default (req, res) => {
    const { method } = req;
    if(method !== "POST") return res.json("Nothing here...");

    const { name, email, message } = req.body;
    const emailMessage = {
        from: "Try Local Team <neonedballroom@gmail.com>",
        to: email,
        subject: `
        Thank you ${name}. We received your message.`,
        text: `Hi ${name}. We just want to let you know that we received your message. 
        We will get back to you as soon as possible. 
        Thank you,
        Team TL`
    }
    transport.sendMail(emailMessage, (err, info) => {
        if(err) return res.json({data: {err}, message: "There was an issue sending email to the user"});
        res.json({data: {info}, message: "message successfully sent!"});
    });
}