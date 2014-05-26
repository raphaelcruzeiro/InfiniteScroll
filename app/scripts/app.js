'use strict';

angular.module('infiniteScrollApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'InfiniteScroll',
    'services.Items'
])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
