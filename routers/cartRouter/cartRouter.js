import { Router } from "express";
// instantiere router
const router = Router();

import { renderPage } from "../../util/templateEngine.js";

import webshopDB from "../../database/connection.js"; 
import session from "express-session";


const cartPage = renderPage("/cartpage/cartpage.html",
{
    tabTitle: "Nodejs cartpage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

router.get("/cartpage", (req,res) => {
    res.send(cartPage); 
})

// session gemt 
router.get("/get-raquet-data", (req, res) => {
    const sendSession = req.session.addRaquetToCart
    console.log(req.session.addRaquetToCart) 
    res.send(sendSession) 
})    

export default router; 