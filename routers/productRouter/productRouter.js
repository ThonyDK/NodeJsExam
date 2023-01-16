import { Router } from "express";
// instantiere router
const router = Router();

import webshopDB from "../../database/connection.js"; 

import { renderPage } from "../../util/templateEngine.js";

// Render productpage
const productPage = renderPage("/productpage/productpage.html",
{
    tabTitle: "Nodejs productpage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});
// Render raquetspage
const raquetsPage = renderPage("/productpage/raquetspage/raquetspage.html",
{
    tabTitle: "Raquetspage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});
// Render bagspage
const bagsPage = renderPage("/productpage/bladebagpage/bagspage.html",
{
    tabTitle: "Bagspage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});
// Render shoespage
const shoesPage = renderPage("/productpage/shoespage.html",
{
    tabTitle: "Bagspage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});
// Render ballpage
const ballsPage = renderPage("/productpage/ballspage.html",
{
    tabTitle: "Ballspage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

// Get productpage
router.get("/productpage", (req,res) => {
    res.send(productPage); 
})
// Get raquetspage
router.get("/raquetspage", (req,res) => {
    res.send(raquetsPage); 
})
// Add raquet to cart
router.get("/add-raquet-to-cart", async (req, res) => {
    const findRaquet = await webshopDB.products.find({ product: "wilson prostaff" }).toArray();
    req.session.addRaquetToCart = findRaquet
    const prostaffRaquetData = req.session.addRaquetToCart
    console.log(prostaffRaquetData)
    res.send(prostaffRaquetData) 
}) 
// Delete session kills all session that has been made
router.delete("/delete-all-items-in-cart", async (req, res) => { 
    req.session.destroy()
    console.log(req.session)
    
    if(req.session == undefined){
        res.send({ success: true }) 
    }
})

// Get bagspage 
router.get("/bagspage", (req,res) => {
    res.send(bagsPage); 
})
// Add bag to cart
router.get("/add-bag-to-cart", async (req, res) => {
    const findBladeBag = await webshopDB.products.find({ product: "wilson blade" }).toArray();
    req.session.addBladeBagToCart = findBladeBag
    const bladeBagData = req.session.addBladeBagToCart
    console.log(bladeBagData)
    res.send(bladeBagData)    
}) 
// Delete bag from cart
router.delete("/delete-bag-session", async (req, res) => { 
    req.session.destroy()
    console.log(req.session)
    
    if(req.session == undefined){
        res.send({ success: true }) 
    }
})

router.get("/shoespage", (req,res) => {
    res.send(shoesPage); 
})

router.get("/ballspage", (req,res) => {
    res.send(ballsPage);  
})

export default router; 