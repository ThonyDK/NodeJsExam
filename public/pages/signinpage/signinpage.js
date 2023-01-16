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
        },
    }).then(res => res.json()) // her starter responset
    console.log("Data send")

    if(response.success) {
        toastr.success("Login complete!")
        setTimeout(function(){
            window.location.replace("/myprofilepage")
        },1500); 
    } else {
        window.location.replace("/signinpage") // set notification
    } 
}  