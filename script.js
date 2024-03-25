function toggleMenu() {
    var menu = document.getElementById("menu-items");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        setTimeout(function () {
            menu.style.display = 'block';
        }, 0);
    } else {
        menu.classList.add("hidden");
        setTimeout(function () {
            menu.style.display = 'none';
        }, 300);
    }
}

document.getElementById("menu-container").addEventListener("mouseleave", function () {
    var menu = document.getElementById("menu-items");
    menu.classList.add("hidden");
    setTimeout(function () {
        menu.style.display = 'none';
    }, 300);
});