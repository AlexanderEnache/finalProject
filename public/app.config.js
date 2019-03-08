"use strict"

angular.module("WW").config(["$routeProvider", function($routeProvider){
	
	$routeProvider
	.when("/main", {template: "<main></main>"})
	.when("/wiskey", {template: "<wiskey></wiskey>"})
	.when("/wine", {template: "<wine></wine>"})
	.when("/portfolio",  {template: "<portfolio></portfolio>"})
	.when("/news", {template: "<news></news>"})
	.otherwise({redirectTo: "/main"});
	
}]);