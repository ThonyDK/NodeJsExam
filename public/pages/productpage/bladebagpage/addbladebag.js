const addbladeBag = document.getElementById("btn-add-bladebag-id").addEventListener("click", addBladeBag);  

async function addBladeBag() { 
    console.log("add bladebagbutton fungere") 
    const response = await fetch("http://localhost:8080/add-bag-to-cart") // Afventer til at denne akt. er gennemført. Derefter nedenfor kommer responset som sendt fra backend
    .then(res => res.json())
    console.log(response)
    window.location.replace("/cartpage") 
}