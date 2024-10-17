const mainImg = document.querySelectorAll(".hero__main [data-path]");

export default function addAnimation() {
    if (mainImg == null) return;

    document.addEventListener("DOMContentLoaded", () => {

        mainImg.forEach(img => {

            if(img.tagName == "SOURCE") {
                let path = img.dataset.path;
                img.srcset = path;
            }else if(img.tagName == "IMG") {
                let path = img.dataset.path;
                img.src = path;

                img.onload = () => {
                    img.classList.add("animate-img");
                };
            }
        });

    });

}
