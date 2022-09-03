// $(document).ready(function() {
//     $("bar").click(function() {
//         $("ul").toggleClass("show")
//     })
// });
var nav = document.querySelector(".bar");
var menu = document.querySelector("ul");
nav.addEventListener("click", function() {
    menu.classList.toggle("show");
})