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

    vm.postPet = function () {
        console.log('postPet', vm.owners);
        pet = {
           pet_name : vm.petNameIn,
           color : vm.colorIn,
           breed : vm.breedIn, 
           owners_id : vm.ownerNameIn,
           is_checked_in : null
        }
        console.log(pet);
        PetService.postPet(pet).then(function() {
            vm.getPets();  
        }
    )};


    vm.deletePet = function(pet) {
        console.log(pet);
        PetService.deletePet(pet).then(function() {
            vm.getPets();
        }
    )};

    vm.putPet = function(pet) {
        console.log(pet);
        PetService.putPet(pet).then(function() {
            vm.getPets();
        }
    )};
    
    vm.getPets(); 
    vm.getOwners(); 



});