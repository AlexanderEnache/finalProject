"use strict";

const wine = {
	
	// <img src = "{{bottle.image}}">
	
	template: `
	
		<h2>wine</h2>
		
		<focus-bottle bottle="$ctrl.bottle" ng-show = "$ctrl.show"></focus-bottle>
		
		<div ng-blur="$ctrl.select(false)" ng-click="$ctrl.select(bottle)" ng-repeat="bottle in $ctrl.wine">
			<p>{{bottle.name}}</p>
		</div>
	
	`,
	
	controller:["Serv", function(Serv){
		
		const vm = this;
		
		vm.show = false;
		
		vm.wine = [];
		
		let time = new Date();
		console.log(time);
		
		Serv.getWine().then(function(res){
			vm.wine = res.data;
			console.log(res);
		})
		
		vm.select = function(bottle){
			
			if(bottle){
				vm.show = true;
				vm.bottle = bottle;
			}else{
				vm.show = false;
			}
			
		}
		
	}]
	
}

angular.module("WW").component("wine", wine);

