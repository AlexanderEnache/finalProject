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
  
  self.setFocusedBottle = function(Bottle){
	  self.Bottle = Bottle;
  }
  
  self.getFocusedBottle = function(){
	  return self.Bottle;
  }
  
  self.search = function(keyword) {
    console.log(keyword + "Service")
    $location.path("/searchresults")
    return $http({
      method: "GET",
      url: `/mainsearch/${keyword}`,
    });
  }
}

angular.module("WW").service("Serv", Serv);