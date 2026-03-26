const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

// abrir/fechar menu
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
});

// fechar menu ao clicar em um link (melhor UX mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        toggle.classList.remove("active");
        nav.classList.remove("active");
    });
});