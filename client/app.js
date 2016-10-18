angular.module('bart', ['bart.services','bart.details', 'bart.signin', 'ngRoute'])
.config(function ($routeProvider) {
  $routeProvider   
    .when('/details', {
      templateUrl: 'details.html',
      controller: 'detailsController'
    })
    .when('/signin', {
      templateUrl: 'signin.html',
      controler: 'AuthController'
    })
    .when('/', {
      templateUrl: 'signin.html',
      controller: 'AuthController'
     
    })
    
});
