"use strict";

const main = {
	
	templateUrl: "main.html",
	controller:["Serv", function(Serv){
		
		const vm = this;
		vm.show = false;
		vm.wine = [];
		vm.showArray = [];
		let time = new Date();
		console.log(time);


		Serv.getWine().then(function(res){
			vm.wine = res.data;
			for(let i = 0; i < vm.wine.length; i++){
				vm.showArray.push(false);
			}
			// console.log(res);
		});
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
		vm.search = function(keyword) {
			console.log(keyword)
			Serv.search(keyword).then(function(res) {
				console.log(res)
				Serv.setSearch(res)
			});
		};
	}]
	
}

angular.module("WW").component("main", main);