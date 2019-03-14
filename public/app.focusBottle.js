"use strict";

const focusBottle = {
	
	bindings: {
		bottle: "<"
	},
	
	template: `
	
	<div class = "focusBottle">
	
		<h4>{{$ctrl.bottle.name}}</h4>
		
		<p>{{$ctrl.bottle.price | currency}}</p>
		<p>Stats</p>
		<p>Stats</p>
		<p>Stats</p>
		
<canvas id="line" class="chart chart-line" chart-data="data"
chart-labels="labels" chart-series="series" chart-click="onClick">
</canvas>
	<div>

	
	`,
	
	controller:["Serv", "$scope", function(Serv, $scope){
		
		const vm = this;
		$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
 		$scope.series ='Series B';
  	$scope.data = [
			[28, 48, 40, 19, 86, 27, 69]
  	];
	}]
	
}

angular.module("WW").component("focusBottle", focusBottle);





