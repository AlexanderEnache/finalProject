"use strict";

function Serv($http, $location){
  const self = this;
  
  self.getWine = function(){
    return $http({
      method:"GET",
      url: "/wine"
    });
  }
  
   self.getWiskey = function(){
    return $http({
      method:"GET",
      url: "/wiskey"
    });
  }
  
}

angular.module("WW").service("Serv", Serv);