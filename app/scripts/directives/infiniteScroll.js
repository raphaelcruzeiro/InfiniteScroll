"use strict";

(function() {
	var module = angular.module('InfiniteScroll', []),
		jq = angular.element;

	module.directive('infiniteScroll', function($parse, $rootScope, $window) {
		return {
			restrict: 'A',
			link: function(scope, elem, attrs) {
				$window = jq($window);

				attrs.distanceTrigger = attrs.distanceTrigger | 400;

				var repeater = elem.children().first(),
					lock = false;

				scope.$eval(attrs.infiniteScroll);

				elem.on('scroll', function() {
					if (!lock) {
						var pos = elem.scrollTop() + elem.height();
						if (repeater.height() - pos < attrs.distanceTrigger) {
							console.log('Loading more items');
							scope.$eval(attrs.infiniteScroll);
							lock = true;
							setTimeout(function() {
								lock = false;
							}, 800);
						}
					}
				});
			}
		};
	});

})();
