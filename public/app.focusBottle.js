"use strict";

const focusBottle = {

	bindings: {
		bottle: "<",
		liveprice: "&"
	},

	template: `
	
	<div class = "focusBottle">
	
		<h4 class="text-align-h4">{{$ctrl.bottle.name}}</h4>
		
		<p>{{$ctrl.price}}</p>
		<p>{{$ctrl.bottle.type}}</p>
		<p>{{$ctrl.bottle.region}}</p>
		<p>{{$ctrl.bottle.description}}</p>
		<p>{{$ctrl.bottle.year}}</p>
	<div class="canvas-container">		
	<canvas id="line" class="chart chart-line" chart-data="data"chart-labels="labels" chart-series="series" chart-options="options" chart-click="onClick">
	</canvas>
	</div>
</div>
	
	`,

	controller: ["Serv", "$scope", "$interval", function (Serv, $scope, $interval) {

		const vm = this;
		vm.price = 0;
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

		$interval(callAtInterval, 5000);
		function callAtInterval() {
		vm.dataArray = [];
		vm.labelArray= [];
		//console.log(vm.bottle.id);
			Serv.refreshGraph(vm.bottle.id).then(function (res) {
				//console.log(res.data)
				let st = "";
				for (let i = 0; i < res.data[0].pricedate.length; i++) {
					if (res.data[0].pricedate[i] == ",") {
						vm.dataArray.push(Number(st));
						st = "";
						vm.labelArray.push("time");
						$scope.labels = vm.labelArray;
						$scope.data = [ vm.dataArray ];
						//console.log(res.data[0].pricedate)
						//console.log(vm.dataArray);
					}else{
						st = st + res.data[0].pricedate[i];
					}
				}
				vm.price = vm.dataArray[vm.dataArray.length-1];
				vm.liveprice({price: vm.price})


				//console.log(vm.dataArray.length-1);
			})
		}

		/* $interval(callAtInterval, 500);
		function callAtInterval() {
			vm.dataArray.push(Math.floor(Math.random()*20+1));
			vm.labelArray.push("feb");
			$scope.labels = vm.labelArray;
			$scope.data = [ vm.dataArray ];
		} */


	}]

}

angular.module("WW").component("focusBottle", focusBottle);





