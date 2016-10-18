angular.module('bart', ['bart.services','bart.details', 'bart.signin', 'ngRoute'])
.config(function ($routeProvider) {
  $routeProvider   
    .when('/details', {
      templateUrl: 'details.html',
      controller: 'detailsController'
    })
    .when('/signin', {
      templateUrl: 'signin.html',
      controler: 'detailsController'
    })
    .when('/', {
      templateUrl: 'signin.html'
     
    })
    
});
