"use strict";

function Serv($http, $location, $interval){
  const self = this;
  self.credits = 10000;
  self.bought = [];

  self.getWine = function(loadmore){
    console.log(loadmore)
    return $http({
      method:"GET",
      url: `/wine/${loadmore}`
    });
  }
  
   self.getWiskey = function(loadmore){
    return $http({
      method:"GET",
      url: `/wiskey/${loadmore}`
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
		  console.log("Bought");
        self.bought[i].quantity += quantity;
        self.credits -= self.bought[i].bottle.price * quantity;
        return;
      } 
    }
	console.log("Bought");
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
		  
		   if (quantity >= self.bought[i].quantity) {
			   self.credits += bottle.price * self.bought[i].quantity;
               self.bought.splice(i, 1);
			   console.log(self.bought)
        	   return;
            }
		 
		 console.log(self.bought)
        self.bought[i].quantity -= quantity
		self.credits += bottle.price * quantity;
        return;
      } 
    }
  }
  $interval(function(){self.callAtInterval()}, 5000);
  self.callAtInterval = function($interval) {
    // for (let i = 1; i < 133; i++) {
      return $http({
        method:"GET",
        url: `/winesearch/129`
      }).then(function(res){
        console.log(res.data)
      });
    // }
    console.log("interval")
  }

}

angular.module("WW").service("Serv", Serv);