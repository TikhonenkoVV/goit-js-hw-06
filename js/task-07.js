const rangeRegulator = document.querySelector("#font-size-control");
const rangeRecipient = document.querySelector("#text");

rangeRegulator.addEventListener(
    "input",
    (el) => (rangeRecipient.style.fontSize = el.target.value + "px")
);
