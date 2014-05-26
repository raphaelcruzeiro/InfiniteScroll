'use strict';

(function() {
	var module = angular.module('services.Items', []);
	module.service('ItemService', function($q) {
		this.loadItems = function(offset, limit) {
			var deferred = $q.defer();
			// Fakes ans AJAX call that should not return imediately
			setTimeout(function() {
				var data = [];
				for (var i = offset; i <= offset + limit; i++) {
					data.push({
						id: i,
						name: ['Name', i].join(' '),
						description: ['Description', i].join(' ')
					});
				}
				deferred.resolve(data);
			}, 300);

			return deferred.promise;
		};
	});
})();
