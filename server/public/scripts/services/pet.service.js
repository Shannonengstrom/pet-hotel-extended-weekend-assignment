app.service('PetService', function($http) {
    console.log('PetService');

    let sv = this; 
    sv.allPets = []; 

    sv.getPet = function () {
        return $http({
            method: 'GET',
            url: '/pet'
        }).then(function(response) {
            console.log('response for GET', response);
            sv.results = response.data;
        }).catch(function(err) {
            console.log('GET error', err);
        });
    };

    sv.postPet = function (pet) {
        console.log('logging pet', pet);
        return $http({
            method: 'POST', 
            url: '/pet', 
            data: pet
        }).then(function(response) {
            console.log('response to POST', response);
            sv.allPets = response.data;
            sv.getPet();
        }).catch(function(err) {
            console.log('error in POST', err);    
        });
    };

    sv.deletePet = function (pet) {
        console.log(pet.id);
        return $http({
            method: 'DELETE', 
            url: `/pet/${pet.id}`
        }).then(function(response) {
            console.log('delete pet', response);
            sv.getPet();
        }).catch(function(err){
            console.log('error in service DELETE of pet', err);
        });
    };


    sv.putPet = function (pet) {
        console.log('logging pet', pet.id);
        return $http({
            method: 'PUT', 
            url: `/pet/${pet.id}` 
            // data: pet
        }).then(function(response) {
            console.log('response to PUT', response);
            sv.allPets = response.data;
            sv.getPet();
        }).catch(function(err) {
            console.log('error in PUT', err);    
        });
    };

})