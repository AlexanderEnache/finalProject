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
    console.log(keyword + "HELLO")
    return $http({
      method: "GET",
      url: `/mainsearch/${keyword}`,
    }).then(function(response) {
      self.searchResults = response.data;
      $location.path("/searchresults");
    });
  }

  
  self.setSearch = function(searchTerm) {
    self.searchTerm = searchTerm
    console.log(self.searchTerm)
  }
  self.searchTerm = []
  self.getSearch = function() {
    return self.searchResults;
  }
}

angular.module("WW").service("Serv", Serv);