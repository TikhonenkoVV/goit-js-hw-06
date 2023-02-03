function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

colorBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomHexColor();
    colorSpan.textContent = getRandomHexColor();
});
