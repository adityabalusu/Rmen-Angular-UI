'use strict';

angular.module('geekvaletApp', [
  'restangular',
  'ui.bootstrap',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.utils'
  
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

   // RestangularProvider.setBaseUrl('/search');
  });
