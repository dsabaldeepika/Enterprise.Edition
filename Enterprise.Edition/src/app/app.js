/// <reference path="home/home.html" />
/// <reference path="~/src/lib/angular/angular.js" />
(function () {
    'use strict';
    var app = angular.module('app', ['common','enterprise', 'platform',
        // Angular modules
        'ngRoute',

        // 3rd Party Modules
        'ui.bootstrap'
    ]);

    app.config(['$routeProvider', configRoutes]);

    function configRoutes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'src/app/enterprise/enterprise.html',
                controller: 'enterpriseCtrl',
                controllerAs: 'vm'
            })
        .when('/', {
            templateUrl: 'src/app/billing/partials/billing.html',
            controller: 'billingCtrl',
            controllerAs: 'vm'
        })

         .when('/', {
        templateUrl: 'src/app/configuration/partials/configuration.html',
        controller: 'configurationCtrl',
            controllerAs: 'vm'
        });


        $routeProvider.otherwise('/');
    }

    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);
})();
