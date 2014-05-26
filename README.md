InfiniteScroll
==============

A simple AngularJS directive for infinite scrolling. Check out the [demo](http://raphaelcruzeiro.github.io/InfiniteScroll/dist/).

Usage
-----

All of the infinite scroll's logic is contained within the _app/scripts/directives/infiniteScroll.js_ file. The directive is designed to work seamlessly with Angular's own ng-repeat, requiring only that the controller keeps track of the list.
To use InfiniteScroll, just add it to your app's dependencies:
```js
angular.module('myApp', [
    // ...

    'InfiniteScroll'
]);
```
Wrap the ng-repeat in an element with the infinite-scroll directive:
```html
<div id="list" infinite-scroll="loadItems()">
    <ul>
        <li ng-repeat="item in items" data-id="{{ item.id }}">
            <div class="inner">
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
            </div>
        </li>
    </ul>
</div>
```
And all that is left is for the controller to handle the item list:
```js
angular.module('myApp')
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
```
The directive also can by applied to an element passing the custom attribute _distance-trigger_ which is the distance, in pixels, from the bottom of the scrollable where the directive will load more items. If this attribute is omited, 400 pixels will be used.

Installing the demo's dependencies:
-----------------------------------

```
npm install
bower install
```

Running the demo project:
-------------------------

```
grunt serve
```

