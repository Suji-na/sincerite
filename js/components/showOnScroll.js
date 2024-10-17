function showOnScroll() {
    document.addEventListener("DOMContentLoaded", () => {
        const header = document.getElementById("header");
        const mainVisual = document.getElementById("main-visual");
        const footerBanner = document.getElementById("footer-banner");

        if (header == null) return;

        let headerHeight = header.offsetHeight;

        let mainVisualHeight;
        let calScrollHeight;

        if(mainVisual) {
            mainVisualHeight = mainVisual.offsetHeight;
            calScrollHeight = mainVisualHeight - headerHeight;
        }else {
            calScrollHeight = 0;
        }

        scrollFix(calScrollHeight);

        document.addEventListener("scroll", () => {
            scrollFix(calScrollHeight);
        });

        function scrollFix(val) {
            if (scrollY >= val) {
                header.classList.add("show-bg");
            } else {
                header.classList.remove("show-bg");
            }

            if (scrollY > 350) {
              footerBanner.classList.remove("hide");
            } else {
              footerBanner.classList.add("hide");
            }
        }
    });
}

export { showOnScroll };
