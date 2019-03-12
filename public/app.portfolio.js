"use strict";


const portfolio = {
	
	templateUrl:"portfolio.html",
	controller: ["Serv", function(Serv){
		const vm = this;
		vm.bought = Serv.getBought();
		console.log(vm.bought)
	}]
	
};

angular.module("WW").component("portfolio", portfolio);

// currency amount - preset - remembered through service - getter and setter
// buy or sell from portfolio page, buy, lowers account amount
// sell, increases account value