angular.module('bart.signin', [])
.controller('AuthController', function ($scope, userFactory) {
  
  var userDetails = {};

  $scope.signin = function (username) {
    var userDetails = userFactory.getUser(username);
  };
	
})
