import locomotiveScroll from "locomotive-scroll";
import './css/main.scss'

const scroll = new locomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: .4,
});

