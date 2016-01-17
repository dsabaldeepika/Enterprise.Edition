/// <reference path="home/home.html" />
(function () {
    'use strict';
    var app = angular.module('enterPrise', [
        // Angular modules
        'ngRoute'

        // 3rd Party Modules
        
    ]);

    app.config(['$routeProvider', configRoutes]);

    function configRoutes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'src/app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
        .when('/', {
            templateUrl: 'src/app/league/league.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
        });


        $routeProvider.otherwise('/');
    }

    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);
})();
