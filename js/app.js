import { tabs } from "./components/tabs";
import { slickSlider } from "./components/slickSlider";
import { smoothScroll } from "./components/smoothScroll";
import { showOnScroll } from "./components/showOnScroll";
import { toggleNavigation, moreNavigation } from "./components/toggleNavigation";
// import { scrollToTop } from "./components/scrollTotop";
import { modal } from "./components/modal";
import { allFaq } from "./components/faqAccordion";
import { fixFooterBanner } from "./components/fixFooterBanner";

import youtubeApi from "./components/youtubeApi";
import addAnimation from "./components/addAnimation";

import { showMore } from "./components/showMore";

import { questionsForm } from "./components/questionsForm";


slickSlider();
smoothScroll();
showOnScroll();
moreNavigation();
allFaq();
fixFooterBanner();
youtubeApi();
addAnimation();
modal();
showMore();
tabs();
questionsForm();
toggleNavigation();
// scrollToTop();
