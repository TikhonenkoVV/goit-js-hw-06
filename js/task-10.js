function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const container = document.querySelector("#boxes");
const divCount = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

container.style.display = "flex";
container.style.gap = "10px";
container.style.flexWrap = "wrap";
container.style.padding = "10px";

const createBoxes = (amount) => {
    if (amount <= 0) return;
    let elements = [];
    let step = 0;
    for (let i = 0; i < amount; i += 1) {
        const el = document.createElement("div");
        el.style.width = `${step + 30}px`;
        el.style.height = `${step + 30}px`;
        el.style.backgroundColor = getRandomHexColor();
        elements.push(el);
        step += 10;
    }
    divCount.value = "";
    return container.append(...elements);
};

createBtn.addEventListener("click", () => {
    createBoxes(divCount.value);
});

destroyBtn.addEventListener("click", () => {
    container.innerHTML = "";
    divCount.value = "";
});
