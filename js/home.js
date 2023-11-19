document.getElementById("welcome").innerHTML = `Welcome ${localStorage.getItem("userName")}`;

document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("userName");
    document.getElementById("logoutBtn").firstElementChild.setAttribute("href", "index.html");
});