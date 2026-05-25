document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

const menuButton =
    document.querySelector("#menu");

const navigation =
    document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

});

const apiKey = "e9438fe486098595b5c2777fbb9d7f84";

const url = `https://api.openweathermap.org/data/2.5/weather?q=Danli,hn&units=imperial&appid=${apiKey}`;

async function getWeather() {

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    displayWeather(data);
}

function displayWeather(data) {

    document.querySelector("#temperature").textContent =
        `Temperature: ${data.main.temp}°F`;

    document.querySelector("#description").textContent =
        data.weather[0].description;
}

getWeather();

const spotlightContainer =
    document.querySelector("#spotlight-container");

async function getSpotlights() {

    const response =
        await fetch("./data/members.json");

    const data =
        await response.json();

    displaySpotlights(data);
}

function displaySpotlights(members) {

    const filtered =
        members.filter(member =>
            member.membership === "Gold" ||
            member.membership === "Silver"
        );

    const randomMembers =
        filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

    randomMembers.forEach(member => {

        const card =
            document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `
            <img src="${member.image}"
            alt="${member.name}">

            <h3>${member.name}</h3>

            <p>${member.phone}</p>

            <p>${member.address}</p>

            <a href="${member.website}"
            target="_blank">

            Visit Website

            </a>

            <p>${member.membership} Member</p>
        `;

        spotlightContainer.appendChild(card);
    });
}

getSpotlights();