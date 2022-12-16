import { Router } from "express";
// instantiere router
const router = Router();

import { renderPage } from "../../util/templateEngine.js";

const cardPage = renderPage("/cardpage/cardpage.html",
{
    tabTitle: "Nodejs cardpage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

router.get("/api/cardpage", (req,res) => {
    res.send(cardPage); 
})

export default router; 