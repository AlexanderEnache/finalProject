"use strict";

function AppService($location, $http) {
    /* const self = this;
    const key = "eedf1c06de58f06a7c9ebc6354d172fed371000f";
    const appID = "c471afec";  */   

    self.Search = function(){  
        return $http({
			method: 'GET',
			url: "http://api.snooth.com/wines/?akey=<your api key>&ip=66.28.234.115&q=napa+cabernet&xp=30"
		});
    }

angular.module("App").service("AppService", AppService);