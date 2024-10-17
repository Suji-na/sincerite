import $ from "jquery";

const partyContentBtns = document.querySelectorAll(".party__report-content-box .party__report-content-btn");
// const partyWrapper = document.querySelector(".party__report-content-box-wrapper");
// const partyWrapperShowMore = document.querySelector("#more .btn-more");

function showMore() {
    if (partyContentBtns != null) {
        partyContentBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                let outer = btn.parentElement.querySelector(".party__report-content-box-outer");
                let content = btn.parentElement.querySelector(".party__report-content-box-outer .party__report-content-details");

                if (btn.classList.contains("open")) {
                    btn.classList.remove("open");
                    outer.classList.remove("open");
                    content.style.removeProperty("max-height");

                } else {
                    btn.classList.add("open");
                    outer.classList.add("open");
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
    }


    // if (partyWrapperShowMore != null) {
        // Show the first four images
        $(".party__report-content-box:lt(3)").show();

        // When the gallery button is clicked
        $("#more .btn-more").on("click", function () {
            // Prevent default behavior
            // All of the hidden images
            var $hidden = $(".party__report-content-box:hidden");
            // Show the next four images
            // $($hidden).slice(0, 3).fadeIn(800);
            $($hidden).fadeIn(800);
            // If the length of $hidden is 4 then hide the button
            // if ($hidden.length == 3) {
                $(this).fadeOut();
            // }
        });

    // }
}

export { showMore };