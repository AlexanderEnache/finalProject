"use strict";

const main = {

	templateUrl: "main.html",
	controller: ["Serv", "$location", "$scope", function (Serv, $location, $scope) {

		const vm = this;
		vm.show = false;
		vm.wine = [];
		vm.showArray = [];

		Serv.getSpirit(20).then(function (res) {
			vm.wine = res.data;
			for (let i = 0; i < vm.wine.length; i++) {
				vm.showArray.push(false);
			}
			// console.log(res);
		});
		vm.ooo = 20;
		vm.load = function () {

			vm.ooo = vm.ooo + 5;
			Serv.getWine(vm.ooo).then(function (res) {
				vm.wine = res.data;
				for (let i = 0; i < vm.wine.length; i++) {
					vm.showArray.push(false);
				}
				// console.log(res);
			});
		}

		vm.select = function (bottle, index) {

			for (let i = 0; i < vm.showArray.length; i++) {
				vm.showArray[i] = false;
			}

			vm.showArray[index] = true;

			if (bottle) {
				vm.show = true;
				vm.bottle = bottle;
			} else {
				vm.show = false;
			}

		}

		vm.search = function (keyword) {
			console.log(keyword)
			Serv.search(keyword);
			//$location.path("/searchresults");
		};
		vm.wallet = Serv.getCredits()

		vm.buy = function (id, quantity) {
			if(!quantity){
				return;
			}
			vm.quantity = quantity;
			Serv.buy(id, quantity);
			vm.wallet = Serv.getCredits();
			launch_toast()
		};



			function launch_toast() {
				const x = document.getElementById("toast")
				x.className = "show";
				setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
		};


		/* $scope.onClick = function (points, evt) {
			console.log(points, evt);
		}; */
		//$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
		/*  $scope.options = {
			 scales: {
				 yAxes: [
					 {
						 id: 'y-axis-1',
						 type: 'linear',
						 display: true,
						 position: 'left'
					 },
					 {
						 id: 'y-axis-2',
						 type: 'linear',
						 display: true,
						 position: 'right'
					 }
				 ]
			 }
		 }; */





	}]

}

angular.module("WW").component("main", main);



//create table noneofit(id serial, name varchar(200), type varchar(20), category varchar(50), color varchar(50), price float, description varchar(500), year int, region varchar(100), abv int, image varchar(1000), quantity int, pricedate varchar(2000));
