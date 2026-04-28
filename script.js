if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    const modal = document.getElementById("contactModal");
    const btnModals = document.querySelectorAll(".open-modal-btn");
    const spanClose = document.getElementsByClassName("close-modal")[0];

    btnModals.forEach(btn => {
        btn.onclick = function (e) {
            e.preventDefault();
            modal.style.display = "flex";
        };
    });

    spanClose.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
