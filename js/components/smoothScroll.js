import $ from "jquery";

function smoothScroll() {
    // Select all links with hashes
    $("a[href*=\"#\"]")
        // Remove links that don't actually link to anything
        .not("[href=\"#\"]")
        .not("[href=\"#0\"]")
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    var headerHeight = $(".header").height();
                    $("html, body").animate({
                        scrollTop: target.offset().top - headerHeight
                    }, 500, "swing", function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        }
                    });
                }
            }
        });
    // $(document).ready(function () {
    //     if (window.matchMedia("(min-width: 768px)").matches) {
    //     var headerHeight = $(".header").height();
    //     console.log(headerHeight);
    //     $(".main").css("margin-top", headerHeight);}
    // });
}

export {
    smoothScroll
};