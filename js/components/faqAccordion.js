function allFaq() {

    document.addEventListener("DOMContentLoaded", () => {
        const allFaqBtns = document.querySelectorAll(".acc-btn");
    
        if (allFaq == null) return;
    
    
        allFaqBtns.forEach((btn) => {
            // if(btn.classList.contains("open") && !btn.classList.contains("sp-acc")) {
            //     btn.nextElementSibling.style.maxHeight = `${btn.nextElementSibling.scrollHeight}px`;
            // }
    
            btn.addEventListener("click", () => {
                if (btn.classList.contains("open")) {
                    btn.classList.remove("open");
                    btn.nextElementSibling.style.maxHeight = "0px";
                } else {
                    btn.classList.add("open");
                    btn.nextElementSibling.style.maxHeight = `${btn.nextElementSibling.scrollHeight}px`;
                }
            });
        });
    });
}
export { allFaq };
