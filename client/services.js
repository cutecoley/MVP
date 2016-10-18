angular.module('bart.services', [])
.factory('bartFactory', function($http) {

	var factory = {};
	function convertXML2JSON(xmlText) {
		var x2js = new X2JS();
		return x2js.xml_str2json( xmlText )
	}

	factory.getAdvisories = function () {
	
		return  (
			$http.get("http://api.bart.gov/api/bsa.aspx?cmd=bsa&key=MW9S-E7SL-26DU-VV8V&date=today")
			.then(function(response) {
				var currentAdv = convertXML2JSON(response.data);
				//console.log ('advisories:', currentAdv);
				return currentAdv.root.bsa.description;
				
			})
		)
 
	}

	factory.getStationList = function() {
		return ( $http.get("http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V")
			 .then(function(response) {
					var stationList = [];
					var stationResponse = convertXML2JSON(response.data);
					//console.log ('stationResponse: ', stationResponse);

					stationResponse.root.stations.station.forEach(function (station) {
						//console.log ('station :', station)
						stationList.push({name: station.name,
							code: station.abbr})
					})

					return stationList ;  
			})
		)
	}
	factory.getSchedule = function(station1, station2, tripdate, triptime) {
		return  (
			
			$http.get("http://api.bart.gov/api/sched.aspx?cmd=depart&orig=" + station1 + "&dest=" + station2
				+ "&key=MW9S-E7SL-26DU-VV8V&date=today&time=" + triptime + "&b=4&a=4")
				 .then(function(response) {
						var schedules= [];
					
						var scheduleResponse = convertXML2JSON(response.data);
						console.log ('scheduleResponse: ', scheduleResponse);

						scheduleResponse.root.schedule.request.trip.forEach(function (trip) {
							//console.log('trip:', trip)
							schedules.push({
								originTime: trip._origTimeMin,
								destinationTime: trip._destTimeMin,
								duration: trip._tripTime})
						})

						return schedules ;
				})
		)
	 
	}

	return factory;
})
.factory('userFactory', function() {
	var users = [{username: 'Manjula', station1: 'FRMT', station2: 'POWL'}, {username: 'John', station1: 'BAYF', station2: 'POWL'}, ]
	var factory = {};
	factory.getUser = function (username) {
		console.log("hello")
		var user = users.filter(function (item) {
			console.log(item.username,username)
			if(item.username === username) {
				return item;
			}
		})
		console.log("user1 ", user);
		return user;
	}
	return factory;

})
