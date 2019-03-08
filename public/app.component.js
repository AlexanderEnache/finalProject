"use strict";

const comp = {
	
	template: `<p>cheking</p>`,
	
	controller:["Serv", function(Serv){
		
		Serv.get().then(function(result){
				
			console.log(result);
				
		});
		
	}]
	
}

angular.module("WW").component("comp", comp);