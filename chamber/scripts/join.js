document.querySelector("#timestamp").value =
    new Date().toISOString();

const npModal = document.querySelector("#npModal");
const bronzeModal = document.querySelector("#bronzeModal");
const silverModal = document.querySelector("#silverModal");
const goldModal = document.querySelector("#goldModal");

document.querySelector("#openNP").addEventListener("click", () => {
    npModal.showModal();
});

document.querySelector("#closeNP").addEventListener("click", () => {
    npModal.close();
});

document.querySelector("#openBronze").addEventListener("click", () => {
    bronzeModal.showModal();
});

document.querySelector("#closeBronze").addEventListener("click", () => {
    bronzeModal.close();
});

document.querySelector("#openSilver").addEventListener("click", () => {
    silverModal.showModal();
});

document.querySelector("#closeSilver").addEventListener("click", () => {
    silverModal.close();
});

document.querySelector("#openGold").addEventListener("click", () => {
    goldModal.showModal();
});

document.querySelector("#closeGold").addEventListener("click", () => {
    goldModal.close();
});    