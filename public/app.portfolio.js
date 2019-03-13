"use strict";


const portfolio = {
	
	templateUrl:"portfolio.html",
	controller: ["Serv", function(Serv){
		const vm = this;
		
		vm.wallet = Serv.getCredits();
		console.log(vm.wallet);
		
		vm.bought = Serv.getBought();
		console.log(vm.bought);

		vm.buy = function(id, quantity) {
			Serv.buy(id, quantity);
			vm.wallet = Serv.getCredits()
		};
		
		vm.sell = function(bottle, quantity) {
			Serv.sell(bottle, quantity)
		}
	}]
	
};

angular.module("WW").component("portfolio", portfolio);

// currency amount - preset - remembered through service - getter and setter
// buy or sell from portfolio page, buy, lowers account amount
// sell, increases account value