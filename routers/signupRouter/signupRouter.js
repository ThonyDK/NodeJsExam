import { Router } from "express";
// instantiere router
const router = Router();

import webshopDB from "../../database/connection.js";

import bcrypt from "bcrypt"

// servicelag der tjekker om databasen har en 
import { checkIfUserExists, findUserByEmail } from "../../signup_service.js" 
// Importing template engine
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
        const hashPassword = await bcrypt.hash(req.body.password,12) // bcrypt.hash metode benyttes og den tager imod data fra frontend og salter det. Det gemmes i variablen hashPassword.
        webshopDB.users.insertOne({ name: req.body.name, email: req.body.email, password: hashPassword }) // Bruger oprettes og koden bliver hashet til databasen af sikkerhedsmæssig grund.
        console.log("User created")
        res.send({ success: true })
    } else {
        console.log("User already exists") // hvis den er den til gengæld er true så findes brugeren allerede og kan derfor ikke oprettes.  
        res.send({ success: false });    
    } 
})

export default router; 