'use strict';

angular.module('myApp.siteMenu', []).directive('siteMenu', [ function() {
	return {
		templateUrl: 'siteMenu/siteMenu.tpl.html',
		controller: function($scope) {
		    $scope.site_menu_array = [
		  	  {title: 'Page 1', route: 'view1'},
		  	  {title: 'Page 2', route: 'view2'},
			  {title: 'Page 3', route: 'view3'}
		    ];
		}
	    
	}
}]);