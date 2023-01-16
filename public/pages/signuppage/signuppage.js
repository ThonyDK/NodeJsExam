const signupButton = document.getElementById("btn-signup-id").addEventListener("click", signup);

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
        },
    }).then(res => res.json()) // her starter responset
    console.log("Data send") // i res.Json burde der gerne stå objektet {success: true eller false}
    if(response.success) {
        window.location.replace("/signinpage")
    } else {
        window.location.replace("/signuppage")
    }
}  

