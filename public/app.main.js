"use strict";

const main = {
	
	templateUrl: "main.html",
	controller:["Serv", "$location", "$scope", function(Serv, $location, $scope){
		
		const vm = this;
		vm.show = false;
		vm.wine = [];
		vm.showArray = [];

		Serv.getWine(10).then(function(res){
			vm.wine = res.data;
			for(let i = 0; i < vm.wine.length; i++){
				vm.showArray.push(false);
			}
			// console.log(res);
		});
		vm.ooo = 10;
		vm.load = function(){
			
			vm.ooo = vm.ooo + 5;
			Serv.getWine(vm.ooo).then(function(res){
				vm.wine = res.data;
				for(let i = 0; i < vm.wine.length; i++){
					vm.showArray.push(false);
				}
				// console.log(res);
			});
		}

		vm.select = function(bottle, index){
			
			for(let i = 0; i < vm.showArray.length; i++){
				vm.showArray[i] = false;
			}

			vm.showArray[index] = true;

			if(bottle){
				vm.show = true;
				vm.bottle = bottle;
			}else{
				vm.show = false;
			}
			
		}
		
		vm.search = function(keyword) {
			console.log(keyword)
			Serv.search(keyword);
			//$location.path("/searchresults");
		};
		vm.wallet = Serv.getCredits()

		vm.buy = function(id, quantity) {
			Serv.buy(id, quantity);
			vm.wallet = Serv.getCredits()
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