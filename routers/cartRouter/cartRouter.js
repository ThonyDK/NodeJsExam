import { Router } from "express";
// instantiere router
const router = Router();

import { renderPage } from "../../util/templateEngine.js";

const cartPage = renderPage("/cartpage/cartpage.html",
{
    tabTitle: "Nodejs cartpage",
});

router.get("/cartpage", (req,res) => {
    res.send(cartPage); 
})

// session raquet data gemt 
router.get("/get-raquet-data", (req, res) => {
    const sendSession = req.session.addRaquetToCart
    console.log(req.session.addRaquetToCart) 
    res.send(sendSession) 
}) 

router.delete("/delete-wilson-prostaff-in-cart", async (req, res) => { 
    const wilsonRaquetSession = req.session.addRaquetToCart
    console.log(wilsonRaquetSession)
    wilsonRaquetSession == undefined
    console.log(wilsonRaquetSession)
    res.send(wilsonRaquetSession)
})

// session blade bag data gemt 
router.get("/get-bladeBag-data", (req, res) => {
    const sendBladeBagSession = req.session.addBladeBagToCart
    console.log(req.session.addBladeBagToCart)  
    res.send(sendBladeBagSession)      
})  

export default router; 