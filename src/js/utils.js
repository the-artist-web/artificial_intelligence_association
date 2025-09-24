'use strict';

/**
 * Add events on elements
 */
const addEventsOnElements = ($elements, eventType, callback) => $elements.forEach($elem => $elem.addEventListener(eventType, () => callback($elem)));

export {
    addEventsOnElements
}