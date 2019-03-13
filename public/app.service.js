"use strict";

function Serv($http, $location){
  const self = this;
  self.credits = 10000;
  self.bought = [];

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
      console.log(self.searchResults)
      $location.path("/searchresults");
      return response.data;
    });
  }  
  // self.setSearch = function(searchTerm) {
  //   self.searchTerm = searchTerm
  //   console.log(self.searchTerm)
  // }
  // self.searchTerm = []
  self.getSearch = function() {
    return self.searchResults;
  }

  self.getCredits = function() {
    return self.credits;
  }
  self.buy = function(bottle, quantity) {
    for (let i = 0; i < self.bought.length; i++) {
      if (self.bought[i].bottle.id == bottle.id) {
        self.bought[i].quantity += quantity;
        self.credits -= self.bought[i].bottle.price * quantity;
        return;
      } 
    }
    self.bought.push({bottle: bottle, quantity: quantity})
    console.log(bottle.price + " " + quantity)
    self.credits -= bottle.price * quantity;
  }
  self.getBought = function() {
    return self.bought;
  }

  self.sell = function(bottle, quantity){
    console.log(bottle, quantity)
    
    for (let i = 0; i < self.bought.length; i++) {
      if (self.bought[i].bottle.id == bottle.id) {
        self.bought[i].quantity -= quantity
        console.log(self.bought)
        if (self.bought[i].quantity <= 0) {
          self.bought.splice(i, 1);
          console.log(self.bought)
        }
        return;
      } 
    }
  }

}

angular.module("WW").service("Serv", Serv);