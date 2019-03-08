"use strict";

const wiskey = {
	
	template: `
	
		<h2>wiskey</h2>
		
		<div ng-repeat = "bottle in $ctrl.wiskey">
			<img src = "{{bottle.image}}">
			<p>{{bottle.name}}</p>
		</div>
	
	`,
	
	controller:["Serv", function(Serv){
		
		const vm = this;
		
		vm.wiskey = [];
		
		let time = new Date();
		console.log(time);
		
		Serv.getWiskey().then(function(res){
			
			vm.wiskey = res.data;
			console.log(res);
			
		})
		
	}]
	
}

angular.module("WW").component("wiskey", wiskey);