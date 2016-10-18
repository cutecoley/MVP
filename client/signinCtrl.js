angular.module('bart.signin', [])
.controller('AuthController', function ($scope, $location, $window, userFactory) {
  
  var username = '';
  var password = '';

  $scope.signin = function ($event) {
  
  $event.preventDefault();
  console.log("user: ", $scope.username)
    var user = userFactory.getUser($scope.username);
    console.log('user: ', user.station1)
     //$window.location.href = '/#/details?station1=' + user[0].station1 + "&station2=" + user[0].station2;
     $location.path('/details?station1=' + user.station1 + "&station2=" + user.station2);
  };
})
