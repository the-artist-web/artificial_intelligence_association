'use strict';

export const Copyright = ($elements) => {
    let yearNow = new Date().getFullYear();
    $elements.forEach($elem => $elem.innerHTML = `جميع الحقوق محفوظة ${yearNow}`);
};