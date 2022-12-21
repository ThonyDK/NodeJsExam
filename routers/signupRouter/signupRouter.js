import { Router } from "express";
// instantiere router
const router = Router();

import webshopDB from "../../database/connection.js"

// servicelag der tjekker om databasen har en 
import { checkIfUserExists, findUserByEmail } from "../../signup_service.js" 

import { renderPage } from "../../util/templateEngine.js";

const signupPage = renderPage("/signuppage/signuppage.html",
{
    tabTitle: "Nodejs signuppage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});


router.get("/signuppage", (req,res) => {
    res.send(signupPage); 
})

router.post("/signuppage", async (req,res) => {
    console.log("POST request called",req.body) // hp@mail.com fx reg.body ved brug af frontend
    if((await checkIfUserExists(req.body.email)) === false) { // Hvis over i checkIfUserExists er false vil det sige at den er false her også og en user kan indsættes i DB.
        webshopDB.users.insertOne(req.body) // Bruger oprettes.
        console.log("User created")
        res.send({ success: true })
        //console.log({data: users}) 
    } else {
        console.log("User already exists") // hvis den er den til gengæld er true så findes brugeren allerede og kan derfor ikke oprettes. 
        //res.send("User already exists") // Denne skal udkommenteres og du skal benytte res.send(signinPage) længere nede i stedet til din frontend.  
        res.send({ success: false });  
    } 
})

export default router; 

/*
const obj = "{ success: true }"
obj.success
console.log(obj)
*/