"use strict";

const wine = {
	
	template: `
	
		<h2>wine</h2>
		<p ng-repeat = "bottle in $ctrl.wine">{{bottle.name}}</p>
	
	`,
	
	controller:["Serv", function(Serv){
		
		const vm = this;
		
		vm.wine = [];
		
		Serv.get().then(function(res){
			
			vm.wine = res.data;
			console.log(res);
			
		})
		
	}]
	
}

angular.module("WW").component("wine", wine);