const params = new URLSearchParams(window.location.search);

document.querySelector("#fname").textContent =
    params.get("fname");

document.querySelector("#lname").textContent =
    params.get("lname");

document.querySelector("#email").textContent =
    params.get("email");

document.querySelector("#phone").textContent =
    params.get("phone");

document.querySelector("#business").textContent =
    params.get("business");

document.querySelector("#membership").textContent =
    params.get("membership");

document.querySelector("#timestamp").textContent =
    params.get("timestamp");

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();