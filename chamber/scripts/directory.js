const url = "./data/members.json";
const cards = document.querySelector("#members-container");

async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data);
}

getMembers();

const displayMembers = (members) => {

    members.forEach((member) => {

        const card = document.createElement("section");

        card.classList.add("member-card");

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">

            <h3>${member.name}</h3>

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>

            <p>${member.membership} Member</p>
        `;

        cards.appendChild(card);
    });
};

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});

cards.classList.add("grid");