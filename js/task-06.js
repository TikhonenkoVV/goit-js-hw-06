const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (el) => {
    const textLength = el.target.value.length;
    if (textLength === 6) {
        el.target.classList.remove("invalid");
        el.target.classList.add("valid");
    } else {
        el.target.classList.remove("valid");
        el.target.classList.add("invalid");
    }
});
