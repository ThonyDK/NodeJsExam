const signinButton = document.getElementById("btn-signup-id").addEventListener("click", signup);

async function signup() {
    console.log("signupbutton fungere")
    const response = await fetch("http://localhost:8080/signuppage", {
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
    }).then(res => res.json()) // her starter responset
    console.log("Data send")

    if(response.success) {
    window.location.replace("/signinpage")
    } else {
        window.location.replace("/signuppage") // set notification
    }
}  

