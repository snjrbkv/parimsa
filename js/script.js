let elBtn = document.querySelectorAll(".paginetion--btn");
let elCard = document.querySelectorAll(".swiper-card");
let modals = document.querySelectorAll(".modal");
let cards = document.querySelectorAll(".galary--photo");

elBtn[0].classList.add("active--btn");
elCard[0].classList.add("active--card");

elBtn.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        elBtn.forEach(btn => btn.classList.remove("active--btn"));
        event.currentTarget.classList.add("active--btn");

        elCard.forEach(card => card.classList.remove("active--card"));

        elCard[index].classList.add("active--card");
    });
});
let active = () => {
    document.body.classList.toggle("active")
}

function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "none";
}

cards.forEach((card) => {
    card.addEventListener("click", () => {
        let modalId = card.getAttribute("data-modal");
        openModal(modalId);
    });
});

let closeButtons = document.querySelectorAll(".close");
closeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let modalId = event.currentTarget.getAttribute("data-modal");
        closeModal(modalId);
    });
});

window.addEventListener("click", (event) => {
    modals.forEach((modal) => {
        if (event.target == modal) {
            let modalId = modal.id;
            closeModal(modalId);
        }
    });
});
