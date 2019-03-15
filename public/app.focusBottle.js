"use strict";

const focusBottle = {

	bindings: {
		bottle: "<"
	},

	template: `
	
	<div class = "focusBottle">
	
		<h4 class="text-align-h4">{{$ctrl.bottle.name}}</h4>
		
		<p>{{$ctrl.bottle.price | currency}}</p>
		<p>Stats</p>
		<p>Stats</p>
		<p>Stats</p>
<div class="canvas-container">		
<canvas id="line" class="chart chart-line" chart-data="data"
chart-labels="labels" chart-series="series" chart-options="options" chart-click="onClick">
</canvas>
</div>
</div>


	
	`,

	controller: ["Serv", "$scope", "$interval", function (Serv, $scope, $interval) {

		const vm = this;
		vm.dataArray = [];
		vm.labelArray = [];
		$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
		$scope.series = 'Series B';
		$scope.data = [
			[28, 48, 40, 19, 86, 27, 69]
		];
		$scope.options = {
			animation: {
       			duration: 0
  			}
		}

		// $interval(callAtInterval, 5000);
		// function callAtInterval() {
		// 	Serv.refreshGraph(79).then(function (res) {
		// 		console.log(res.data)
		// 		let st = "";
		// 		for (let i = 0; i < res.data[0].pricedate.length; i++) {
		// 			if (res.data[0].pricedate[i] == ",") {
		// 				vm.dataArray.push(Math.floor(Math.random()*20+1));
		// 				vm.labelArray.push("feb");
		// 				$scope.labels = vm.labelArray;
		// 				$scope.data = [ vm.dataArray ];
		// 				console.log(res.data[0].pricedate)
		// 				console.log(vm.dataArray);
		// 			}
		// 			st = st + res.data[0].pricedate[i];
		// 		}


		// 	})
		// }

		$interval(callAtInterval, 500);
		function callAtInterval() {
			vm.dataArray.push(Math.floor(Math.random()*20+1));
			vm.labelArray.push("feb");
			$scope.labels = vm.labelArray;
			$scope.data = [ vm.dataArray ];
		}


	}]

}

angular.module("WW").component("focusBottle", focusBottle);





