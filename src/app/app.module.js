/**
 * Created by yonatom on 8/31/16.
 */

(function () {
    'use strict';

    angular.module('app', [
        'app.core','app.auth', 'app.profile', 'app.home', 'app.restaurant', 'app.client','ngDropdowns', 'angular.filter'
    ])
        .constant("appConstant", {
        "onlineApi": "http://localhost/gastrobooking/gastrobooking.api/public/api",
        //"onlineApi": "http://localhost/www_originsource_FTP_0302/gastrobooking.api/public/api/",

	    //"onlineApi": "http://api.gastro-booking.cz/api",
            "grant_type": "password",
            "client_id": "$2y$10$jvw/V6Fo9mvp4JXDCYYI..123uYpTEl27",
            "client_secret": "$2y$10$9OqJjxC9qZKC92L.123nO7hVOPY0436eU",
            "localImagePath": "http:/localhost:8000/",
	    "imagePath": "http://api.gastro-booking.cz/"
        }).run(['$rootScope', '$state', '$stateParams', addUIRouterVars])

        .factory("TokenRestangular", tokenRestangular);

    /*@ngNoInject*/
    function tokenRestangular(Restangular, appConstant) {
        /*@ngNoInject*/
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setDefaultHeaders({Authorization: 'Bearer ' + localStorage.getItem('access_token')});
            RestangularConfigurer.setBaseUrl(appConstant.onlineApi);
        });

    }

    function addUIRouterVars($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        // add previous state property
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
            $state.previous = fromState;
        });
    }

})();
