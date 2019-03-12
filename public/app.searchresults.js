"use strict";

const searchresults = {

    templateUrl: `searchresults.html`,
    controller: ["$location", "Serv", function ($location, Serv) {

        const vm = this;
        vm.show = false;
        vm.wine = [];
        vm.showArray = [];
        vm.$onInit = function () {
            vm.searchResults = Serv.getSearch();
            console.log(vm.searchResults);
            // vm.searchResults = res.data;
            for (let i = 0; i < vm.searchResults.length; i++) {
                vm.showArray.push(false);
            }
        }

        // Serv.getWine().then(function (res) {
      
        //     // console.log(res);
        // });
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
        vm.search = function(keyword) {

            Serv.search(keyword).then(function(res){
                vm.searchResults = res;
                console.log(res);
                
            for (let i = 0; i < vm.searchResults.length; i++) {
                   vm.showArray.push(false);
            }
            });

            // console.log(keyword);

            // vm.searchResults = Serv.getSearch();

            // console.log(vm.searchResults);

            // vm.showArray = [];

            // for (let i = 0; i < vm.searchResults.length; i++) {
            //        vm.showArray.push(false);
            // }
            // //$location.path("/searchresults");
            // console.log(vm.searchResults);
        
        };

        vm.buy = function(id, quantity) {
			Serv.buy(id, quantity)
		};
        

    }]

}

angular.module("WW").component("searchresults", searchresults);