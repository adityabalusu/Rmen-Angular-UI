'use strict';

angular.module('geekvaletApp')
  .controller('MainCtrl', function ($scope,Restangular) {
    var Search = Restangular.one('search/');    

    Search.get().then(function(response){
      $scope.services = response.services
    });

    var serviceSkills = {'plumber':{'skills':['fix my sink','fix my commode-western','fix my random','fix my randomer','fix my nice try']},'electrician':{'skills':['fix my lights','fix my washing machine']},'mechanic':{'skills':['fix my car','fix my bike']}};
    var backgroundimage='';
    
    $scope.$watch('services',function(){
      $scope.serviceplaceholder = $scope.services[0];
      $scope.skillsplaceholder = serviceSkills[$scope.serviceplaceholder].skills[0];
    }
    )
    $scope.$watch('selected',function(){
      if($scope.services.indexOf($scope.selected)!==-1){
        backgroundimage = $scope.selected;
        $('html').css('background','url(../../images/'+backgroundimage+'.jpg)');
        $('body').css('background','url(../../images/'+backgroundimage+'.jpg)');
      }
      
      $scope.skills = serviceSkills[$scope.selected].skills;
      $scope.skillsplaceholder = $scope.skills[0];
      console.log($scope.skills);
    });
  });
