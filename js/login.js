let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");

let users = JSON.parse(localStorage.getItem("users")) || []; 

document.getElementById("loginBtn").addEventListener("click", login);

function login() {
    console.log(loginEmail.value , loginPassword.value)
    if (loginEmail.value == "" || loginPassword == "") {
        document.getElementById("Message").innerHTML = "All inputs are required";
    } else {
        document.getElementById("Message").innerHTML = "";
        checkLogin();
    }
    
}
function checkLogin() {
    for (let i = 0; i < users.length ; i++){
        if(loginEmail.value.toLowerCase() == users[i].email.toLowerCase() &&
            loginPassword.value == users[i].password) {
            document.getElementById("Message").innerHTML = "";
            localStorage.setItem("userName", users[i].name);
            document.getElementById("homeLink").setAttribute("href","home.html");
        } else {
            document.getElementById("Message").innerHTML = "make sure your email and password are correct";
        }
    }
}

