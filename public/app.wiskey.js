"use strict";

const wiskey = {
	
	templateUrl: "whiskey.html",
	
	controller:["Serv", function(Serv){
		
		const vm = this;
		
		vm.wiskey = [];
		
		let time = new Date();
		console.log(time);
		
		Serv.getWiskey(10).then(function(res){
			
			vm.wiskey = res.data;
			console.log(res);
			
		});

		vm.ooo = 10;
		vm.load = function(){
			
			vm.ooo = vm.ooo + 5;
			Serv.getWiskey(vm.ooo).then(function(res){
				vm.wiskey = res.data;
				for(let i = 0; i < vm.wiskey.length; i++){
					vm.showArray.push(false);
				}
				// console.log(res);
			});
		}
		
		vm.wallet = Serv.getCredits();
		
		vm.buy = function(id, quantity) {
			Serv.buy(id, quantity);
			vm.wallet = Serv.getCredits()
		};
		
	}]
	
}

angular.module("WW").component("wiskey", wiskey);