"use strict";

const focusBottle = {
	
	bindings: {
		bottle: "<"
	},
	
	template: `
	
	<div class = "focusBottle">
	
		<h4>{{$ctrl.bottle.name}}</h4>
		
		<p>Stats</p>
		<p>Stats</p>
		<p>Stats</p>
		<p>Stats</p>
		
	<div>
	
	`,
	
	controller:["Serv", function(Serv){
		
		const vm = this;
		
		console.log(vm.bottle);
		
		let time = new Date();
		console.log(time);
		
	}]
	
}

angular.module("WW").component("focusBottle", focusBottle);





