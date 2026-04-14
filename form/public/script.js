
const params = new URLSearchParams(window.location.search);

document.getElementById("name").textContent = params.get("name");
document.getElementById("email").textContent = params.get("email");
document.getElementById("number").textContent = params.get("number");
document.getElementById("message").textContent = params.get("message");