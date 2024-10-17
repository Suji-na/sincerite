export default function youtubeApi() {
    // console.log("working");

    const allPlayer = document.querySelectorAll(".youtube img");

    if(allPlayer == null) return;

    allPlayer.forEach(player => {
        player.addEventListener("click", () => {
            const playerVideo = player.nextElementSibling;

            const playerVideoIframe = playerVideo.querySelector("iframe");

            const videoLink = playerVideoIframe.src + "?autoplay=1&rel=0";

            playerVideoIframe.src = videoLink;

            playerVideo.classList.remove("hide");
            player.remove();
        });
    });


}