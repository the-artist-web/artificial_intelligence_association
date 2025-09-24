'use strict';

let lastScrollTop = 0;

export const FixedScrolling = ($elements) => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    $elements.forEach($elem => {
        if (currentScroll > lastScrollTop) {
            $elem.classList.add("active");
        } else {
            $elem.classList.remove("active");
        }
    });
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
};