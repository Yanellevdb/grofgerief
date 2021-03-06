var btnSignup= document.querySelector(".btn--signup");
btnSignup.addEventListener("click", (e) => {
    e.preventDefault();

    let username= document.querySelector("#email").value;
    let password= document.querySelector("#password").value;

    fetch("http://localhost:3000/users/signup", {
        method: "post", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            "username": username, 
            "password": password
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        if (json.status === "success") {
            let feedback= document.querySelector(".alert");
            feedback.textContent= "Sign up complete!";
            feedback.classList.remove("hidden");
        }
    })
});