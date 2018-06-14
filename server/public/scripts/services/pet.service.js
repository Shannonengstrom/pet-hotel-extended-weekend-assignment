app.service('PetService', function($http) {
    console.log('PetService');

    let sv = this; 
    sv.allPets = []; 
    sv.getPet = function () {
        return $http({
            method: 'GET',
            url: '/pets'
        }).then(function(response) {
            console.log('response for GET', response);
            sv.allPets = response.data;
        }).catch(function(err) {
            console.log('GET error', err);
        });
    };

    sv.postPet = function (petToSend) {
        console.log('logging petToSend', petToSend);
        return $http({
            method: 'POST', 
            url: '/pets', 
            data: petToSend
        }).then(function(response) {
            console.log('response to POST', response.data);
            sv.allPets = response.data;
        }).catch(function(err) {
            console.log('error in POST', err);    
        });
    };


})