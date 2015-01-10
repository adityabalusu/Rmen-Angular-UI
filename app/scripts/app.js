'use strict';

angular.module('geekvaletApp', [
  'restangular',
  'ui.bootstrap',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
  
])
  .config(function ($routeProvider,RestangularProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    //RestangularProvider.setBaseUrl('/search');
  });
