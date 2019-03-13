"use strict";

const wine = {
	
	// <img src = "{{bottle.image}}">
	
	templateUrl: `wine.html`,
	
	controller:["Serv", function(Serv){
		
		const vm = this;
		
		vm.show = false;
		
		vm.wine = [];
		
		let time = new Date();
		console.log(time);
		
		Serv.getWine(10).then(function(res){
			vm.wine = res.data;
			console.log(res);
		});

		vm.ooo = 10;
		vm.load = function(){
			
			vm.ooo = vm.ooo + 5;
			Serv.getWine(vm.ooo).then(function(res){
				vm.wine = res.data;
				for(let i = 0; i < vm.wine.length; i++){
					vm.showArray.push(false);
				}
				// console.log(res);
			});
		}
		
		vm.select = function(bottle){
			
			if(bottle){
				vm.show = true;
				vm.bottle = bottle;
			}else{
				vm.show = false;
			}
			
		};
		vm.wallet = Serv.getCredits();
		
		vm.buy = function(id, quantity) {
			Serv.buy(id, quantity);
			vm.wallet = Serv.getCredits()
		};
		
	}]
	
}

angular.module("WW").component("wine", wine);

