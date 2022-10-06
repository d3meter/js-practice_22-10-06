const span = document.querySelectorAll ("span");
const container = document.querySelectorAll (".container");

for (let i=0; i<span.length; i++) {
    span[i].addEventListener("mouseover", function () {
        span[i].classList.add("newStyle");
    })
    span[i].addEventListener("mouseout", function () {
        span[i].classList.remove("newStyle");
    })
}

/* const span = document.querySelectorAll ("span");
const container = document.querySelectorAll (".container");

for (let i=0; i<span.length; i++) {
    span[i].addEventListener("mouseover", function () {
        span[i].style.color = `black`;
        span[i].style.fontSize = `80px`;
        span[i].style.transition = `all 2s ease`;
    })
    span[i].addEventListener("mouseout", function () {
        span[i].style.color = ``;
        span[i].style.fontSize = ``;
    })
} */

/* container.addEventListener("mouseover", function () {
    container.style.backgroundColor = `red`;
    span.style.color = `black`;
    span.style.fontSize = `80px`;
    span.style.transition = `all 2s ease`;
})

container.addEventListener("mouseout", function () {
    container.style.backgroundColor = ``;
    span.style.color = ``;
    span.style.fontSize = ``;
}) */