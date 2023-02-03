const decrementBtn = document.querySelectorAll("[data-action]");
const counterField = document.querySelector("#value");
let counterValue = 0;

decrementBtn.forEach((button) => {
    button.addEventListener("click", (btn) => {
        const isIncrement =
            btn.target.getAttribute("data-action") === "increment";
        if (isIncrement ? (counterValue += 1) : (counterValue -= 1));
        counterField.textContent = counterValue;
    });
});
