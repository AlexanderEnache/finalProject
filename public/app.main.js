"use strict";

const main = {
	
	templateUrl: "main.html",
	controller:["Serv", "$location", function(Serv, $location){
		
		const vm = this;
		vm.show = false;
		vm.wine = [];
		vm.showArray = [];

		Serv.getWine().then(function(res){
			vm.wine = res.data;
			for(let i = 0; i < vm.wine.length; i++){
				vm.showArray.push(false);
			}
			// console.log(res);
		});
		vm.select = function(bottle, index){
			console.log("kappa")
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
		vm.search = function(keyword) {
			console.log(keyword)
			Serv.search(keyword);
			//$location.path("/searchresults");
		};
		vm.wallet = Serv.getCredits()

		vm.buy = function(id, quantity) {
			Serv.buy(id, quantity);
			vm.wallet = Serv.getCredits()
		};


	}]
	
}

angular.module("WW").component("main", main);