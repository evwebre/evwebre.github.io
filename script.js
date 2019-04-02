(function () {
	'use strict';
	window.addEventListener('DOMContentLoaded', function (e) {
		var carouselElem = document.querySelector('div.container div.col-lg-6'),
			calloutContainerElem = document.querySelector('div.container div.col');
		if (carouselElem.offsetHeight < calloutContainerElem.offsetHeight) {
			calloutContainerElem.parentNode.insertBefore(calloutContainerElem, carouselElem);
		}
	});
})();
