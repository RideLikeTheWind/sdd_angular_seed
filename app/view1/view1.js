'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'dataService', function($scope, dataService) {
	//Everything Data
	$scope.storeData = function() {
		dataService.storeFormData($scope.username, $scope.userage);
		console.log(dataService.formDataStore);
	}
	$scope.frontPageBlogRoll = [
		{imageUrl: '../assets/images/image_space.jpg', title: 'Space', text: 'Some cool text here'},
		{imageUrl: 'assets/images/image_space.jpg', title: 'Space', text: 'Some cool text here'},
		{imageUrl: 'assets/images/image_space.jpg', title: 'Space', text: 'Some cool text here'},
		{imageUrl: 'assets/images/image_space.jpg', title: 'Space', text: 'Some cool text here'},
		{imageUrl: 'assets/images/image_space.jpg', title: 'Space', text: 'Some cool text here'}
	];
	
	
}]);