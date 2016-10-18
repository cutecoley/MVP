angular.module('bart', ['bart.services','bart.details','ngRoute'])
.config(function ($routeProvider) {
  $routeProvider   
    .when('/details', {
      templateUrl: 'details.html',
      controller: 'detailsController'
    })
    
});
