(function () {
    'use strict';
    function positionElements() {
        var calloutContainerElem = document.querySelector('div.container div.col'),
            carouselElem = document.querySelector('div.container div.col-lg-6');

        if (carouselElem.offsetHeight < calloutContainerElem.offsetHeight) {
            calloutContainerElem.parentNode.insertBefore(calloutContainerElem, carouselElem);
        } else if (carouselElem.offsetHeight === calloutContainerElem.offsetHeight &&
                   calloutContainerElem.offsetLeft < carouselElem.offsetLeft) {
            carouselElem.parentNode.insertBefore(carouselElem, calloutContainerElem);
        }
    }

    // Set up jQuery event listeners.
    $(document).ready(positionElements);
    $(window).resize(positionElements);
})();
