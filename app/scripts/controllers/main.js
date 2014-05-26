'use strict';

angular.module('infiniteScrollApp')
    .controller('MainCtrl', function($scope, ItemService) {

        $scope.items = [];
        $scope.lastItem = 1;
        $scope.offset = 40;

        $scope.loadItems = function() {
            ItemService.loadItems($scope.lastItem, $scope.offset).then(function(data) {
                $scope.items = $scope.items.concat(data);
                $scope.lastItem += $scope.offset + 1;
            });
        };
    });
