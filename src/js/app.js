'use strict';

/**
 * Import module
*/
import { FixedScrolling } from "./components/FixedScrolling.js";
import { Tooltip } from "./components/Tooltip.js";
import { addEventsOnElements } from "./utils.js";

/**
 * Fixed scrolling
 */
const $fixedScrollings = document.querySelectorAll("[data-fixed-scrolling]");
window.addEventListener("scroll", () => FixedScrolling($fixedScrollings));

/**
 * Run tooltip
 */
const $tooltips = document.querySelectorAll("[data-bs-toggle='tooltip']");
Tooltip($tooltips);

/**
 * Change lang dir
 */
const $langs = document.querySelectorAll("[data-langs]");
addEventsOnElements($langs, "click", function ($elem) {
    const lang = $elem.dataset.langs === "en" ? "ar" : "en";
    const dir = $elem.dataset.langs === "en" ? "ltr" : "rtl";
    
    $elem.innerHTML = "";
    $elem.innerHTML = `
        ${$elem.dataset.langs === "en" ? "AR" : "EN"}
        
        <div class="state-layer"></div>
    `;
    
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;

    $elem.dataset.langs = lang;
});