const footer = document.getElementById("footer");
const footerBanner = document.getElementById("footer-banner");

function fixFooterBanner() {
    document.addEventListener("DOMContentLoaded", () => {


        if (footer == null) return;

        let option = {
            threshold: 0.1
        };

        let observer = new IntersectionObserver(hideBanner, option);

        observer.observe(footer);

        function hideBanner(entries) {
            if (entries[0].isIntersecting) {
                footerBanner.classList.add("hide-imp");
            } else {
                footerBanner.classList.remove("hide-imp");
            }

        }
    });
}

export { fixFooterBanner };