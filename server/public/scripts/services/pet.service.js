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


})