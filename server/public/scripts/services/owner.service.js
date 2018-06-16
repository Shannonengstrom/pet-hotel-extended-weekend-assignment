app.service('OwnerService', function($http) {
    console.log('OwnerService');

    let sv = this; 

    sv.allOwners = []; 
    
    sv.getOwner = function () {
        return $http({
            method: 'GET',
            url: '/owner'
        }).then(function(response) {
            console.log('response for GET', response);
            sv.results = response.data;
        }).catch(function(err) {
            console.log('error in service GET of owner', err);
        });
    };

    sv.postOwner = function (owner) {
        console.log('logging ownerToSend', owner);
        return $http({
            method: 'POST', 
            url: '/owner', 
            data: owner
        }).then(function(response) {
            console.log('response to POST', response);
            sv.allOwners = response.data;
            sv.getOwner(); 
        }).catch(function(err) {
            console.log('error in service POST of owner', err);    
        });
    };

    sv.deleteOwner = function (owner) {
        console.log(owner.id);
        return $http({
            method: 'DELETE', 
            url: `/owner/${owner.id}`
        }).then(function(response) {
            console.log('delete owner', response);
        }).catch(function(err){
            console.log('error in service DELETE of owner', err);
            
        });
        
    };


});