const addprostaffraquet = document.getElementById("btn-add-prostaff-id").addEventListener("click", addProstaffRaquet); 

// Denne funktion laver kaldet og gør at session til raquet bliver lavet som så gør at cartRouters get-raquet-data bliver gemt i dens route og derfra kan bliver sendt videre til cartpage.html
async function addProstaffRaquet() {
    console.log("add prostaffbutton fungere")
    const response = await fetch("http://localhost:8080/add-raquet-to-cart") // Afventer til at denne akt. er gennemført. Derefter nedenfor kommer responset som sendt fra backend
    .then(res => res.json())
    console.log(response)
    window.location.replace("/cartpage")

}

  