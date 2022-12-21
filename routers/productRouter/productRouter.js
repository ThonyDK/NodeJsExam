import { Router } from "express";
// instantiere router
const router = Router();

import { renderPage } from "../../util/templateEngine.js";

const productPage = renderPage("/productpage/productpage.html",
{
    tabTitle: "Nodejs productpage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

router.get("/productpage", (req,res) => {
    res.send(productPage); 
})

export default router; 