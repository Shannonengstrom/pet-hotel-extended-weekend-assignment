app.controller('OwnerController', function(OwnerService){
    let vm = this;
    owners = [];

    vm.getOwners = function () {
        console.log('getOwner');
        OwnerService.getOwner().then(function(response) {
            vm.owners = OwnerService.results; 
            console.log(vm.owners);
        }   
    )};
        
    vm.postOwner = function () {
        console.log('postOwner');
        owner = {
           first_name : vm.firstNameIn, 
           last_name : vm.lastNameIn
        }
        console.log(owner);
        OwnerService.postOwner(owner).then(function() {
            vm.getOwners();  
    });
    }

    vm.deleteOwner = function (owner) {
        console.log(owner);
        OwnerService.deleteOwner(owner).then(function() {
            vm.getOwner();
        });
    }
    vm.getOwners(); 
});