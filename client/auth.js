angular.module('bart.auth', [])
.controller('AuthController', function ($scope, $http) {
  $scope.user = {};
  	
    $scope.stationList;
	$scope.init = function() {
		console.log(getAll());
	}
	$scope.init();
	 
	 

	
})