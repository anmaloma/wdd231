const container = document.querySelector("#fields-container");
const modal = document.querySelector("#fieldModal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");

async function loadFields() {
    try {
        const response = await fetch("data/fields.json");

        if (!response.ok) {
            throw new Error("Could not load field data.");
        }

        const fields = await response.json();

        displayFields(fields);

    } catch (error) {
        console.error(error);
        container.innerHTML = "<p>Unable to load fields.</p>";
    }
}

function displayFields(fields) {
    fields.forEach(field => {

        const card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${field.image}"
                 alt="${field.name}"
                 loading="lazy">

            <div class="card-content">
                <h2>${field.name}</h2>

                <p><strong>Price:</strong> L ${field.price}</p>

                <p><strong>Location:</strong> ${field.location}</p>

                <p><strong>Hours:</strong> ${field.hours}</p>

                <button class="details-btn">
                    View Details
                </button>
            </div>
        `;

        const button = card.querySelector(".details-btn");

        button.addEventListener("click", () => {
            showModal(field);

            // localStorage
            localStorage.setItem(
                "lastViewedField",
                field.name
            );
        });

        container.appendChild(card);
    });
}

function showModal(field) {

    modalContent.innerHTML = `
        <h2>${field.name}</h2>

        <img src="${field.image}"
             alt="${field.name}"
             style="width:100%; border-radius:10px; margin:1rem 0;">

        <p><strong>Price:</strong> L ${field.price}</p>

        <p><strong>Location:</strong> ${field.location}</p>

        <p><strong>Hours:</strong> ${field.hours}</p>
    `;

    modal.showModal();
}

closeModal.addEventListener("click", () => {
    modal.close();
});

loadFields();

const lastViewed = localStorage.getItem("lastViewedField");

if (lastViewed) {
    document.querySelector("#last-viewed").textContent =
        `Last viewed field: ${lastViewed}`;
}