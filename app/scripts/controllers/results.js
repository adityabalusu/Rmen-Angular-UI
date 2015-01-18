'use strict';

angular.module('geekvaletApp')
  .controller('ResultsCtrl', ['$scope','ngDialog','serviceMatch',function ($scope,ngDialog,Servicematch) {
    
     $scope.serviceSelected = Servicematch.getSelectedService();
     $scope.skillSelected = Servicematch.getSelectedSkill();

    Servicematch.getSearch({s:$scope.serviceSelected,sk:$scope.skillSelected}).then(function(response){
        $scope.results = response.service_providers;
    })

}]);
