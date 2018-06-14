app.controller('PetController', function(PetService){
    let vm = this;
    vm.pets = []; 

    PetService.getPet().then(function () {
        vm.pets = PetService.allPets;
        
    });

    vm.addPet = function (petToSend) {
        console.log('addPet');
        console.log(vm.petToSend);
        PetService.postPet(vm.petToSend);  
    }



});