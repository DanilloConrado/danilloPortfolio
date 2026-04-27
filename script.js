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
    const btnModal = document.getElementById("openModalBtn");
    const spanClose = document.getElementsByClassName("close-modal")[0];

    btnModal.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "flex";
    };

    spanClose.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
