let dubaiText = document.getElementById('dubaitext');
let burjkhalifa = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    dubaiText.style.left = value * -2 + 'px';
    burjkhalifa.style.top = value * 1 + 'px';
    stars.style.top = value * 1 + 'px';
})

const cube = document.getElementById("cube");
const shadow = document.getElementById("shadow");

cube.addEventListener("click", function() {
    if (cube.classList.contains("blue")) {
        cube.classList.remove("blue");
        cube.classList.add("red");
    } else {
        cube.classList.remove("red");
        cube.classList.add("blue");
    }
});
cube.addEventListener("click", function() {
    if (shadow.classList.contains("blue")) {
        shadow.classList.remove("blue");
        shadow.classList.add("red");
    } else {
        shadow.classList.remove("red");
        shadow.classList.add("blue");
    }
});