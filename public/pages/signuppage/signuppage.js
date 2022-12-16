const signinButton = document.getElementById("btn-signup-id").addEventListener("click", signup);

async function signup() {
    console.log("signupbutton fungere")
    await fetch("http://localhost:8080/signuppage", {
        method: "POST",
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        }),
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
            //"Access-Control-Allow-Origin": "*"
        },
    })
    //location.replace("/signinpage")
}  

