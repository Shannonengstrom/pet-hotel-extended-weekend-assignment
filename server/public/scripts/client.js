const app = angular.module( 'app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as vm'
    }).when('/pet-dashboard', {
        templateUrl: 'views/pet-dashboard.html',
        controller: 'PetController as vm'
    }).when('/owners', {
        templateUrl: 'views/owner.html',
        controller: 'OwnerController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});