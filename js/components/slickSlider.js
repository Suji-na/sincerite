import $ from "jquery";
import "slick-carousel";

function slickSlider() {
    $(".slick-slider").on("init", (event, slick) => {
        const slider = slick.$slider[0].parentElement;

        const resizeObserver = new ResizeObserver((entries) => {
            const sliderDiv = entries[0].target;
            let height = 0;

            const allSliderText = $(sliderDiv).find(".voice__card-desc");

            $(allSliderText).each((i, text) => {
                if (height < text.offsetHeight) {
                    height = text.offsetHeight;
                }
            });

            $(allSliderText).each((i, text) => {
                text.style.minHeight = height + "px";
            });
        });

        resizeObserver.observe(slider);
    });

    $(".slick-slider").slick({
        swipe: true,
        variableWidth: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 1500,
        centerMode: true,
        pauseOnHover: false,
        // responsive: [
        //     {
        //         breakpoint: 767,
        //         settings: {
        //             pauseOnHover: true,
        //         },
        //     },
        // ],

        prevArrow: $(".voice__swiper-button-prev"),
        nextArrow: $(".voice__swiper-button-next"),

        dots: true,
        appendDots: $(".slider-pagination"),
    });

    var obj;

    $(".popular__swiper").each((index, elem) => {
        $(elem).addClass("popular__swiper" + index);

        let prevBtn = $(".popular__swiper" + index)
            .next()
            .find(".popular-button-prev");
        let nextBtn = $(".popular__swiper" + index)
            .next()
            .find(".popular-button-next");
        let pagination = $(".popular__swiper" + index)
            .next()
            .find(".popular-pagination");

        if ($(".popular__swiper").length >= 2) {
            if (index == 0) {
                obj = "unslick";
            } else {
                obj = {
                    variableWidth: false,
                    slidesToShow: 1,
                };
            }
        } else {
            obj = {
                variableWidth: false,
                slidesToShow: 1,
            };
        }

        $(`.popular__swiper${index}`).slick({
            swipe: false,
            variableWidth: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 1500,
            centerMode: true,
            pauseOnHover: false,

            prevArrow: $(prevBtn),
            nextArrow: $(nextBtn),

            dots: true,
            appendDots: $(pagination),

            responsive: [
                {
                    breakpoint: 767,
                    settings: obj,
                },
            ],
        });
    });

    $(".hero__slider").on("init", (event, slick) => {
        $(slick.$slides[0]).find("img").addClass("zoomInImage");
    });

    $(".hero__slider").slick({
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        cssEase: "ease-out",
        waitForAnimate: false,
        useTransform: true,
    });

    $(".hero__slider").on(
        "beforeChange",
        (event, slick, currentSlide, nextSlide) => {
            slick.$slides.map((index, slide) => {
                if (currentSlide != index) {
                    $(slide).find("img").removeClass("op-0");
                    $(slide).find("img").removeClass("zoomInImage");
                }
            });

            $(slick.$slides[currentSlide]).find("img").addClass("op-0");
            $(slick.$slides[nextSlide]).find("img").addClass("zoomInImage");
        }
    );

    $(".strength-point__slider").on("init", (e, slick) => {
        const slider = slick.$slider[0];

        const resizeObserver = new ResizeObserver((entries) => {
            const sliderDiv = entries[0].target;
            let height = 0;

            const allSlide = $(sliderDiv).find(".strength-point__slide-card");
            $(allSlide).each((i, slide) => {
                if (height < slide.offsetHeight) {
                    height = slide.offsetHeight;
                }
            });

            $(allSlide).each((i, slide) => {
                slide.style.minHeight = height + "px";
            });
        });

        resizeObserver.observe(slider);
    });

    $(".strength-point__slider").slick({
        infinite: true,
        variableWidth: true,
        speed: 500,
        centerMode: true,
        // initialSlide: 2,

        prevArrow: $(".party-button-prev"),
        nextArrow: $(".party-button-next"),

        dots: true,
        appendDots: $(".party-pagination"),
    });

    $(".party__report-slider-wrapper").each((index, elem) => {
        $(elem).addClass("party__report-slider-wrapper" + index);

        let prevBtn = $(".party__report-slider-wrapper" + index)
            .next()
            .find(".party-report-button-prev");
        let nextBtn = $(".party__report-slider-wrapper" + index)
            .next()
            .find(".party-report-button-next");
        let pagination = $(".party__report-slider-wrapper" + index)
            .next()
            .find(".party-report-pagination");

        $(`.party__report-slider-wrapper${index}`).slick({
            infinite: true,
            variableWidth: true,
            speed: 500,

            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        variableWidth: false,
                        centerMode: true,
                        slidesToShow: 1,
                    },
                },
            ],

            // prevArrow: $(".party__report-navigation .party-report-button-prev"),
            prevArrow: prevBtn,
            // nextArrow: $(".party__report-navigation .party-report-button-next"),
            nextArrow: nextBtn,

            dots: true,
            // appendDots: $(".party__report-navigation .party-report-pagination"),
            appendDots: pagination,
        });
    });
}

export { slickSlider };
