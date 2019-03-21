const modal = {
    templateUrl:"modal.html",
    controller: [function(){
    const vm = this;

    vm.modal=true;
    vm.modal2=true;
    vm.hideModal = function() {
        vm.modal = false;
        vm.modal2 = true;
    }

    document.addEventListener("click", function(e){
        if (e.target.id != "button21") {
            vm.modal2 = false;
			document.getElementById("moddal").innerHTML = `Some people invest in art, others invest in stocks.
            With Double Barrel, you can invest in the finest and rarest wines and whiskeys.
            You are initially given $10,000 to invest, good luck!<br><br><p>Loading Data...</p>`
        }   
    })

    }]

};



angular.module("WW").component("modal", modal);