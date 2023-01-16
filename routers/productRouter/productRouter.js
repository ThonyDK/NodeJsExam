import { Router } from "express";
// instantiere router
const router = Router();

import webshopDB from "../../database/connection.js"; 

import { renderPage } from "../../util/templateEngine.js";

const productPage = renderPage("/productpage/productpage.html",
{
    tabTitle: "Nodejs productpage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

const raquetsPage = renderPage("/productpage/raquetspage/raquetspage.html",
{
    tabTitle: "Raquetspage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

const bagsPage = renderPage("/productpage/bagspage.html",
{
    tabTitle: "Bagspage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

const shoesPage = renderPage("/productpage/shoespage.html",
{
    tabTitle: "Bagspage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

const ballsPage = renderPage("/productpage/ballspage.html",
{
    tabTitle: "Ballspage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});


router.get("/productpage", (req,res) => {
    res.send(productPage); 
})

router.get("/raquetspage", (req,res) => {
    res.send(raquetsPage); 
})

router.get("/add-raquet-to-cart", async (req, res) => {
    const findRaquet = await webshopDB.products.find({ product: "wilson prostaff" }).toArray();
    req.session.addRaquetToCart = findRaquet
    const prostaffRaquetData = req.session.addRaquetToCart
    console.log(prostaffRaquetData)
    res.send(prostaffRaquetData) 
    /*
    if(session == undefined) {
        res.send({ success: false })
    } else {
        console.log("add to cart")
        res.send({ success: true })
    }*/
}) 

router.delete("/delete-raquet-session", async (req, res) => { 
    req.session.destroy()
    console.log(req.session) 
})

router.get("/bagspage", (req,res) => {
    res.send(bagsPage); 
})

router.get("/shoespage", (req,res) => {
    res.send(shoesPage); 
})

router.get("/ballspage", (req,res) => {
    res.send(ballsPage);  
})

export default router; 