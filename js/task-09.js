function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

colorBtn.addEventListener("click", () => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    colorSpan.textContent = color;
});
