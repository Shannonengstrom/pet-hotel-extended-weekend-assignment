app.controller('PetController', function(PetService, OwnerService){
    let vm = this;
    vm.pets = []; 

    vm.getOwners = function () {
        console.log('getOwner');
        OwnerService.getOwner().then(function(response) {
            vm.owners = OwnerService.results; 
            console.log(vm.owners);
        }
    )};

    vm.getPets = function () {
        console.log('getPet');
        PetService.getPet().then(function(response) {
            vm.pets = PetService.results; 
        }   
    )};

    vm.addPet = function (petToSend) {
        console.log('addPet');
        console.log(vm.petToSend);
        PetService.postPet(vm.petToSend);  
    }

    vm.postPet = function () {
        console.log('postPet');
        pet = {
           pet_name : vm.petNameIn,
           color : vm.colorIn,
           breed : vm.breedIn, 
           owner : vm.ownerNameIn
        }
        console.log(pet);
        PetService.postOwner(pet).then(function() {
            vm.getPets();  
    });
    }

    vm.getPets(); 
    vm.getOwners(); 



});