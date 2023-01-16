import { Router } from "express";
import { sendMail } from "../../util/emailSender.js"; // importere sendMail så vi kan bruge den her i contactRouter
// instantiere router
const router = Router();


import { renderPage } from "../../util/templateEngine.js";

const contactPage = renderPage("/contactpage/contactpage.html",
{
    tabTitle: "Nodejs contactpage",
});

const frontPage = renderPage("/frontpage/frontpage.html",
{
    tabTitle: "Nodejs contactpage",
});

router.get("/contactpage", (req,res) => {
    res.send(contactPage); 
})

router.post("/contactpage", (req, res) => {
    console.log(req.body)
    let name = req.body.name;
    let email = req.body.email;
    let textBody = req.body.message;
    sendMail(name, email, textBody)
    .then(result => res.send(frontPage))
    .catch(console.error) 
})

export default router; 