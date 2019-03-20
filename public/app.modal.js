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
        }   
    })

    }]

};



angular.module("WW").component("modal", modal);