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
  
  self.getSpirit = function(loadmore){
    console.log(loadmore)
    return $http({
      method:"GET",
      url: `/spirit/${loadmore}`
    });
  }
  
   self.getWiskey = function(loadmore){
    return $http({
      method:"GET",
      url: `/wiskey/${loadmore}`
    });
  }
  
  self.getPrice = function(id){
    return $http({
      method:"GET",
      url: `/getprice/${id}`
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

  self.getSearch = function() {
    return self.searchResults;
  }

  self.getCredits = function() {
    return self.credits;
  }
  self.buy = function(bottle, quantity) {
    for (let i = 0; i < self.bought.length; i++) {
      if (self.bought[i].bottle.id == bottle.id) {
		  //console.log("Bought");
        self.bought[i].quantity += quantity;
        self.credits -= self.bought[i].bottle.price * quantity;
        return;
      } 
    }
	//console.log("Bought");
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
		 
		//  console.log(self.bought)
        self.bought[i].quantity -= quantity
		self.credits += bottle.price * quantity;
        return;
      } 
    }
  }
  $interval(function(){self.callAtInterval()}, 10000);
  self.str= "";

  self.price;
  self.nextprice;
  self.callAtInterval = function($interval) {
    for (let i = 1; i <= 65; i++) {
      $http({
        method:"GET",
        url: `/winesearch/` + i,
      }).then(function(res){
        // console.log(res.data[0].pricedate)
        self.str = res.data[0].pricedate + ',' + self.setPrice(Number(self.getLast(res.data[0].pricedate)), self.getFirst(res.data[0].pricedate));
        // self.price = Number(self.getLast(res.data[0].pricedate));
        // console.log(self.str);
		$http({
       	 method:"PUT",
       	 url: `/winesearch/` + i,
       	 data: {newprice: self.str, price: self.price}
     	}).then(function(res){
        // console.log(self.str);
     	});
      });
     /*  $http({
        method:"GET",
        url: `/winesearch/` + i,
      }).then(function(res){
        // console.log(res.data[0].pricedate)
      }); */
    }
  }

 self.setPrice = function(initPrice, firstPrice) {
	  
	  //console.log(Math.floor(Math.random()*3)-1);
	  if(initPrice > firstPrice + (firstPrice / 3.2857)){
		 self.price = Math.floor((initPrice - Math.random()*initPrice/200)*100)/100;
	  }else if(initPrice < firstPrice - (firstPrice / 3.2857)){
		 self.price = Math.floor((initPrice + Math.random()*initPrice/200)*100)/100;
	  }else{
		 if(Math.floor(Math.random()*2) == 1){
			 self.price = Math.floor((initPrice - Math.random()*initPrice/200)*100)/100;
		 }else{
			 self.price = Math.floor((initPrice + Math.random()*initPrice/200)*100)/100;
		 }
	  }
      return String(self.price);
  }
  
  self.getFirst = function(str) {
	    let st = "";
   		for(let i = 0; i < str.length; i++){
     		if(str[i] == ","){
     		  return st;
    		}
    	  st = st + str[i];
   		}
   		return st;
	}

  self.getLast = function(str) {
    let st = "";
   for(let i = str.length - 1; i >= 0; i--){
     if(str[i] == ","){
      //  console.log(st);
       return st;
     }
     st = str[i] + st;
   }
   return st || "12";
  }
  
self.refreshGraph = function(i) {
  return $http({
    method:"GET",
    url: `/winesearch/` + i,
  }).then(function(res){
    //console.log(res.data[0].pricedate)
    self.str = res.data[0].pricedate + ',' + self.setPrice(Number(self.getLast(res.data[0].pricedate)));
    //self.price = Number(self.getLast(res.data[0].pricedate));
        // console.log(self.str);
        return res;
  });
}
}

angular.module("WW").service("Serv", Serv);


//update allofit set pricedate = '', price = 0;