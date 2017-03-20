/**
 * Created by Job on 6/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.restaurant')
        .config(moduleConfig);
    /*@ngNoInject*/
    function moduleConfig($stateProvider) {

        $stateProvider
            .state('main.search', {
                url: "/search",
                params: {'search':""},
                templateUrl: "app/public/restaurant/restaurant_search.html",
                controller: 'RestaurantSearchController',
                controllerAs: 'vm'
            }).state('main.restaurant_detail', {
                url: "/restaurant/{restaurantId}",
                params: {'menuList':"", 'restaurantId':""},
                templateUrl: "app/public/restaurant/restaurant_detail.html",
                controller: "RestaurantDetailController",
                controllerAs: "vm"
            });


    }
})();