"use strict";

const wine = {

	// <img src = "{{bottle.image}}">

	templateUrl: `wine.html`,

	controller: ["Serv", function (Serv) {

		const vm = this;
		vm.show = false;
		vm.wine = [];
		vm.showArray = [];


		let time = new Date();
		console.log(time);

		Serv.getWine(10).then(function (res) {
			vm.wine = res.data;
			for (let i = 0; i < vm.wine.length; i++) {
				vm.showArray.push(false);
			}
			// console.log(res);
		});

		vm.ooo = 10;
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
		vm.wallet = Serv.getCredits();

		vm.buy = function (id, quantity) {
			vm.quantity = quantity;
			Serv.buy(id, quantity);
			vm.wallet = Serv.getCredits();
			launch_toast()
		};



		function launch_toast() {
			const x = document.getElementById("toast")
			x.className = "show";
			setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
		};

	}]

}

angular.module("WW").component("wine", wine);

