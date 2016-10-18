angular.module('bart.details', [])
.controller('detailsController', function($scope, $location,bartFactory) {
	$scope.schedules = [];
	$scope.stationList = [];	
	$scope.status = '';
	$scope.commute = '';
	$scope.getStatus = function() {
		bartFactory.getAdvisories().then(function(status) {
			$scope.status = status;
		})
	};

	var userDetails = {};
	$scope.user = {};

  	

	$scope.getDetails = function(username) {
		console.log('location: ', $location)
		// var station1 = $location.search().station1;
		// var station2 = $location.search().station2;
		userDetails = userFactory.getUser(username);
		console.log("user details ", userDetails);
		var station1 = userDetails.station1;
		var station2 = userDetails.station2;
		var origStn, destStn, startTime, startDate;
		var d = new Date();

		if (d.getHours() < 10){
			$scope.commute = "Morning commute: "
			origStn = station1
			destStn = station2
			startDate = new Date()
			startTime = ((d.getHours() < 6 ? 7: d.getHours() + 1).toString() + ":00+am");// (d.getHours() + 1).toString() + ":00+am"
		} else {
			$scope.commute = "Evening commute: "
			origStn = station2
			destStn = station1
			startDate = new Date()
			startTime = ((d.getHours() < 19 ? 8: d.getHours() + 1 -12).toString() + ":00+pm");
		}
		console.log('from:', origStn)
		$scope.fromStation = origStn;
		$scope.toStation = destStn;

		bartFactory.getSchedule(origStn, destStn, startDate, startTime).then(function(schedules) {
			$scope.schedules = schedules;
		})
	};

	$scope.getStationList = function() {
		bartFactory.getStationList().then(function(stationList) {
			$scope.stationList = stationList;
		})
	};
	
	
	$scope.getStationList();
	$scope.getStatus();
	$scope.getDetails();
})