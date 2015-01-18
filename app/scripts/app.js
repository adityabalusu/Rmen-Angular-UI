'use strict';

angular.module('geekvaletApp', [
  'restangular',
  'ui.bootstrap',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngDialog',
  'ngRoute',
  'ui.utils'
  
])
  .config(function ($routeProvider,RestangularProvider) {
    $routeProvider
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

   // RestangularProvider.setBaseUrl('/search');
  });
