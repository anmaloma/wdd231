const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const phone = params.get("phone");
const date = params.get("date");
const time = params.get("time");
const field = params.get("field");

const container = document.querySelector("#reservation-info");

container.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Field:</strong> ${field}</p>
`;