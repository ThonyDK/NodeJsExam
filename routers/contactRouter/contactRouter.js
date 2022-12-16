import { Router } from "express";
// instantiere router
const router = Router();

import { renderPage } from "../../util/templateEngine.js";

const contactPage = renderPage("/contactpage/contactpage.html",
{
    tabTitle: "Nodejs contactpage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

router.get("/contactpage", (req,res) => {
    res.send(contactPage); 
})

export default router; 