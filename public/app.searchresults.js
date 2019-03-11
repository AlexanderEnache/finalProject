"use strict";

const searchresults = {
	
	templateUrl: `searchresults.html`,
	controller:["Serv", function(Serv){
		
		const vm = this;
		vm.show = false;
		vm.wine = [];
		vm.showArray = [];
		let time = new Date();
		console.log(time);
		vm.$onInit = function() {
			vm.searchResults = Serv.getSearch();
		}

		Serv.getWine().then(function(res){
			vm.searchResults = res.data;
			for(let i = 0; i < vm.searchResults.length; i++){
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
			});
		};
	}]
	
}

angular.module("WW").component("searchresults", searchresults);