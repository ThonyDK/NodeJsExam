const logoutButton = document.getElementById("btn-logout-id").addEventListener("click", logout);

async function logout() {
    console.log("logoutbutton fungere")
    //logoutButton.preventDefault()
    const response = await fetch("http://localhost:8080/logout", { // .then er efter jeg har modtaget responset
        method: "POST",
        }).then(res => res.json()) // her starter responset og reponse indeholder nu objektet {success: true} fra logoutRouter
        console.log("Data send") // i res.Json burde der gerne stå objektet {success: true eller false
        toastr.success("Logout complete!")
        setTimeout(function(){
            window.location.replace("/")
        },2000);

        
} 