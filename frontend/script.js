const span = document.querySelector("span");
const container = document.querySelector(".container");

container.addEventListener("mouseover", function () {
    container.style.backgroundColor = `red`;
    span.style.color = `black`;
    span.style.fontSize = `80px`;
    span.style.transition = `all 2s ease`;
})

container.addEventListener("mouseout", function () {
    container.style.backgroundColor = ``;
    span.style.color = ``;
    span.style.fontSize = ``;
})