var bar = document.querySelector(".bar");
var list = document.querySelector("ul");
bar.addEventListener("click", function() {
    list.classList.toggle("show");
})