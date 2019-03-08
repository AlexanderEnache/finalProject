"use strict";

const wine = {
	
	template: `
	
		<h2>wine</h2>
		
		<div ng-repeat = "bottle in $ctrl.wine">
			<img src = "{{bottle.image}}">
			<p>{{bottle.name}}</p>
		</div>
	
	`,
	
	controller:["Serv", function(Serv){
		
		const vm = this;
		
		vm.wine = [];
		
		let time = new Date();
		console.log(time);
		
		Serv.getWine().then(function(res){
			
			vm.wine = res.data;
			console.log(res);
			
		})
		
	}]
	
}

angular.module("WW").component("wine", wine);