
document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("floating-nav");
    menu.classList.toggle("show");
});


function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "50vw") { // Sidebar neemt 50% van het scherm
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "50vw"; // Brede sidebar
    }
}


function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section) => section.classList.add("hidden"));

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove("hidden");
    }

   
    toggleSidebar();
}


function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const onScrollElements = document.querySelectorAll(".onscroll-hidden");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("onscroll-visible");
            }
        });
    });

    onScrollElements.forEach((el) => observer.observe(el));
});

