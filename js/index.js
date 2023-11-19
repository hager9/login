
let signUpName = document.getElementById("signUpName");
let signUpEmail = document.getElementById("signUpEmail");
let signUpPassword = document.getElementById("signUpPassword");

let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("signUpBtn").addEventListener("click", signUp);

function signUp() {

    if (validateUserName(signUpName.value, /^[A-Za-z]{3,11}[A-Za-zs]{0,11}/)
        && validateUserEmail(signUpEmail.value, /^[A-Za-z0-9]{3,}@gmail.com$/)
        && validateUserPassword(signUpPassword.value, /^.{5,15}$/)) {
        
        
        if (emailExist() == true) {
            document.getElementById("Message").innerHTML = "Email already exists";
                
        } else {
            document.getElementById("Message").innerHTML = "";
            let user = {
                name: signUpName.value,
                email: signUpEmail.value,
                password: signUpPassword.value,
            }

            users.push(user);
            document.getElementById("MessageDetails").innerHTML = "";
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById("loginLink").setAttribute("href", "login.html");
            document.getElementById("Message").innerHTML = "Success";
            document.getElementById("Message").classList.replace("text-danger", "text-success");
            clearInputs(); 
            }
        
        
    } else {
            document.getElementById("Message").innerHTML = "All inputs are required";
            document.getElementById("Message").classList.replace("text-success", "text-danger");
            document.getElementById("MessageDetails").innerHTML = "Name should contain at least three letters & Email should end with @gmail.com & Password must consist of at least five charcters";
    }
    
}

function validateUserName(userNameInput, pattern) {
    return pattern.test(userNameInput);
}

function validateUserEmail(userEmailInput, pattern) {
    return pattern.test(userEmailInput);
}
function validateUserPassword(userPasswordInput, pattern) {
    return pattern.test(userPasswordInput);
}

function emailExist() {
    for (let i = 0; i < users.length; i++)
        if (signUpEmail.value.toLowerCase() == users[i].email.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    
}


function clearInputs() {
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
}
