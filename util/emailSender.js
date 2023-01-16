// Henter nodemailer fra bibliotek
import nodemailer from "nodemailer";


export async function sendMail(name, email, textBody) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // Nedenfor er til at benytte en fake mail til at teste mail funktionen
  // Først gå til denne hjemmeside og tryk på Create Ethereal Account: https://ethereal.email/ 
  // Så bruger sætter du hele const transport fra nodemailer siden ind https://ethereal.email/create 
  // Open mailbox for at se hvilke mails du har fået fra contact siden. 
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'candice59@ethereal.email',
        pass: 'UWAQM2Yw96G2qRYW7j'
    }
});

  // send mail med defineret transport objekter
  let info = await transporter.sendMail({
    name: name,
    from: email, // sender address
    to: "Tenniswebshop@mail.com", // list of receivers
    subject: "Message from " + name, // Subject line
    text: textBody, // plain text body
    html: `<b>${textBody}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  return "Preview URL: %s", nodemailer.getTestMessageUrl(info);
}