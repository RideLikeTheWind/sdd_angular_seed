'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version',
	'myApp.siteMenu'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])

.service('dataService', function() {
	return {
		formDataStore: [],
		storeFormData: function(username, userage){
			this.formDataStore.push({username: username, userage: userage});
		},
		upcomingEvents: [],
		storeUpcomingEvents: function(input) {
			this.upcomingEvents.push({arbKey: input[1]});
			console.log(this.upcomingEvents);
		}
	};
});
