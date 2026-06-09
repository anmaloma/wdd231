
const visitMessage = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const daysBetween =
        Math.floor((now - Number(lastVisit)) / 86400000);

    if (daysBetween < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    } else {

        visitMessage.textContent =
            `You last visited ${daysBetween} days ago.`;

    }

}

localStorage.setItem("lastVisit", now);




function displayPlaces(places) {

    const container =
        document.querySelector("#places");

    places.forEach(place => {

        const card =
            document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h2>${place.name}</h2>

            <figure>
                <img src="${place.image}"
                     alt="${place.name}"
                     loading="lazy">
            </figure>

            <address>${place.address}</address>

            <p>${place.description}</p>

            <button>Learn More</button>
        `;

        container.appendChild(card);

    });

}




async function getPlaces() {

    try {

        const response = await fetch("data/discover.json");

        console.log("Response:", response);

        const data = await response.json();

        console.log("Data:", data);

        displayPlaces(data);

    } catch (error) {

        console.error("Error:", error);

    }

}

getPlaces();