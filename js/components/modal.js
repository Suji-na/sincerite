// import $ from "jquery";

function modal() {
    const allModalBtn = document.querySelectorAll(".btn-pic-modal");
    const picModal = document.getElementById("pic-modal");

    const allInfoModalBtn = document.querySelectorAll("[data-info]");

    if(allModalBtn != null) {
        allModalBtn.forEach(btn => {
            btn.addEventListener("click", e => {
                e.preventDefault();
                let clickedImg = btn.closest(".grat__tabs-col-sm").querySelector(".grat__fig img").getAttribute("src");
                picModal.querySelector(".modal__fig img").setAttribute("src", clickedImg);
                picModal.classList.add("show");
                document.body.classList.add("of-hidden");
                
                const allModalClose = document.querySelectorAll(".close");
                
                allModalClose.forEach(close => {
                    close.addEventListener("click", () => {
                        hideModal();
                    });
                });
            });
        });
    }

    if(allInfoModalBtn != null) {
        allInfoModalBtn.forEach(modal => {
            modal.addEventListener("click", e => {
                e.preventDefault();
                let popupModalId = modal.getAttribute("data-info");
                let popupModal = document.getElementById(popupModalId);

                popupModal.classList.add("show");
                document.body.classList.add("of-hidden");

                let allCloseBnt = popupModal.querySelectorAll(".btn-close");

                allCloseBnt.forEach(close => {
                    close.addEventListener("click", hideModal);
                });

                popupModal.addEventListener("click", (e) => {
                    console.log(e.target);

                    if(popupModal.classList.contains("show") && (e.target == popupModal.querySelector(".modal__info") || e.target == popupModal.querySelector(".container-1000"))) {
                        hideModal();
                    }   
                });
            });
        });
    }
    
    function hideModal() {
        const modalShow = document.querySelector(".modal.show");
        document.body.classList.remove("of-hidden");
        modalShow.classList.remove("show");
    }
}

export { modal };