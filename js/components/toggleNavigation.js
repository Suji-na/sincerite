const navIcon = document.getElementById("js-navIcon");
const nav = document.getElementById("js-nav");
const closeNav = document.querySelector("#js-nav .close");

const moreNavs = document.querySelectorAll("#js-nav .header__nav-list .more-links");
// const navLinks = document.querySelectorAll(".js-navLink");

const toggleNavigation = () => {
    if(navIcon != null) {
        navIcon.addEventListener("click", () => {
            navIcon.classList.toggle("is-opened");
            nav.classList.toggle("is-opened");
            document.body.classList.toggle("of-hidden");
        });
    }

    if(closeNav != null) {
        closeNav.addEventListener("click", () => {
            navIcon.classList.toggle("is-opened");
            nav.classList.toggle("is-opened");
            document.body.classList.toggle("of-hidden");
        });
    }
};


const moreNavigation = () => {
    if(moreNavs == null) return;

    moreNavs.forEach(innerNav => {
        innerNav.addEventListener("click", (e) => {
            if(window.innerWidth < 768) {
                e.preventDefault();
            }
            
            let navHeight = Math.floor(innerNav.getBoundingClientRect().height);
            let calHeight = innerNav.nextElementSibling.scrollHeight + navHeight;

            console.log(calHeight);

            if(innerNav.classList.contains("open")) {
                innerNav.classList.remove("open");
                innerNav.parentElement.style.maxHeight = `${navHeight}px`;

            }else {
                innerNav.classList.add("open");
                innerNav.parentElement.style.maxHeight = `${calHeight}px`;
            }

        });
    });
};


export {
    toggleNavigation,
    moreNavigation
};