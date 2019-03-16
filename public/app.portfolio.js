"use strict";

const portfolio = {
	
	templateUrl:"portfolio.html",
	controller: ["Serv", function(Serv){
		const vm = this;
		
		vm.showArray = [];
		vm.wallet = Serv.getCredits();
		//console.log(vm.wallet);
		vm.bought = Serv.getBought();
		//console.log(vm.bought);
		for(let i = 0; i < vm.bought.length; i++){
			vm.showArray.push(false);
		}
		
		vm.buy = function(id, quantity) {
			Serv.buy(id, quantity);
			vm.wallet = Serv.getCredits()
		};
		
		vm.sell = function(bottle, quantity) {
			Serv.getPrice(bottle.id).then(function(res){
				bottle.price = res.data[0].price;
				console.log(bottle.price);
				Serv.sell(bottle, quantity);
				vm.wallet = Serv.getCredits();
				//console.log(vm.wallet);
			})
		}
		
		vm.select = function(bottle, index){
			for(let i = 0; i < vm.showArray.length; i++){
				vm.showArray[i] = false;
			}

			vm.showArray[index] = true;

			if(bottle){
				vm.show = true;
				vm.bottle = bottle;
			}else{
				vm.show = false;
			}
			
		}
		
	}]
	
};

angular.module("WW").component("portfolio", portfolio);

// currency amount - preset - remembered through service - getter and setter
// buy or sell from portfolio page, buy, lowers account amount
// sell, increases account value