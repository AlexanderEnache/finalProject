"use strict";

function Serv($http, $location){
  const self = this;
  
  self.get = function(){
    return $http({
      method:"GET",
      url: "/route"
    });
  }
  
}

angular.module("WW").service("Serv", Serv);