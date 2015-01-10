'use strict';

angular.module('geekvaletApp')
  .controller('MainCtrl', function ($scope,Restangular) {
    var Search = Restangular.one('search/');

    Search.get().then(function(response){
      $scope.serviceResponses = response;
      $scope.services = $scope.serviceResponses.services;
    });
    
    var backgroundimage='';
    
    $scope.$watch('services',function(){
      $scope.serviceplaceholder = $scope.services[0];
      //$scope.skillsplaceholder = serviceSkills[$scope.serviceplaceholder].skills[0];
    }
    );

    $scope.serviceSelected = function(){
      $scope.serviceResponses.get({s:$scope.selected}).then(function(skills){
          $scope.skills = skills[$scope.selected];
          $scope.skillsplaceholder = $scope.skills[0];

        });

      if($scope.services.indexOf($scope.selected)!==-1){
        backgroundimage = $scope.selected;
        $('html').css('background','url(../../images/'+backgroundimage+'.jpg)');
        $('body').css('background','url(../../images/'+backgroundimage+'.jpg)');
      }
      
      
    };
  });
