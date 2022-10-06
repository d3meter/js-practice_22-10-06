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