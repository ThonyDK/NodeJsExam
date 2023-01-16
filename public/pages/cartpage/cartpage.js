//const addToCart = document.getElementById("btn-add-prostaff-id").addEventListener("click", addToCart); 

function addToCart() {
    console.log("add prostaffbutton fungere")
    fetch("http://localhost:8080/get-raquet-data") // Afventer til at denne akt. er gennemført. Derefter nedenfor kommer responset som sendt fra backend
    .then(res => res.json())
    
    //console.log("Data")
    //console.log(response)
    

    //const wilsonProstaffData = response.json() // Her er responset som der laves til json. * .then() er ændret til the async way 
    //console.log(wilsonProstaffData); 
    
    
}


/*
const addprostaffraquet = document.getElementById("btn-add-prostaff-id").addEventListener("click", addProstaffRaquet);

async function addProstaffRaquet() {
    console.log("add prostaffbutton fungere")
    const response = await fetch("http://localhost:8080/add-raquet-to-cart", {
        method: "Get"
    }).then(res => res.json()) // her starter responset
    console.log("Data send")
    console.log(response)
    
    if(response.success) {
        window.location.replace("/cartpage")  
    }  
}  */