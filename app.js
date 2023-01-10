const icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.className = "fa-solid fa-sun";
    }
    else {
        icon.className = "fa-solid fa-moon"
    }
}

document.querySelectorAll('a[href^="#"').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});