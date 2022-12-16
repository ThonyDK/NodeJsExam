import { Router } from "express";
// instantiere router
const router = Router();

import { renderPage } from "../../util/templateEngine.js";

const chatPage = renderPage("/chatpage/chatpage.html",
{
    tabTitle: "Nodejs chatpage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

router.get("/chatpage", (req,res) => {
    res.send(chatPage); 
})

export default router; 