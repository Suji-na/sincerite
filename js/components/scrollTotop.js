// import $ from "jquery";

const scrollToTop = () => {
    //jQuery Method
    // $("#js-scrollToTop").click(function() {
    //     $("html, body").animate({
    //         scrollTop: 0
    //     }, 1200);
    //     return false;
    // });

    const toTop = document.getElementById("js-scrollToTop");
    const duration = 1000;
    toTop.addEventListener("click", function(e) {
        // Plain JS
        // https://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery?answertab=votes#tab-top
        e.preventDefault();
        if (document.scrollingElement.scrollTop === 0) return;

        const cosParameter = document.scrollingElement.scrollTop / 2;
        let scrollCount = 0,
            oldTimestamp = null;

        function step(newTimestamp) {
            if (oldTimestamp !== null) {
                // if duration is 0 scrollCount will be Infinity
                scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
                if (scrollCount >= Math.PI) return document.scrollingElement.scrollTop = 0;
                document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
            }
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    });
};

export {
    scrollToTop
};
