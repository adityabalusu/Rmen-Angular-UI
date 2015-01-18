'use strict';

angular.module('geekvaletApp')
  .service('serviceMatch',['Restangular', function serviceMatch(Restangular) {
     var skillSelected,serviceSelected, getSelectedSkill, getSelectedService,setSelectedSkill,setSelectedService;
     return{
     getSelectedService:function(){
        return serviceSelected;
     },
     getSelectedSkill:function(){
        return skillSelected;
     },
     setSelectedService:function(service){
        serviceSelected = service;
     },
     setSelectedSkill:function(skill){
        skillSelected = skill;
     },
     getSearch:function(){
        return Restangular.one('search/').get(arguments[0]);
     }
    }


  }]);
