const signinButton = document.getElementById("btn-signin-id").addEventListener("click", signin);

async function signin() {
    console.log("signinbutton fungere")
    const response = await fetch("http://localhost:8080/signinpage", {
        method: "POST",
        body: JSON.stringify({
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
        window.location.replace("/") 
    } else {
        window.location.replace("/signinpage") // set notification
    } 
}  