var app = angular.module('MoodAdjuster', ['ngRoute']);

app.controller('apiCtrl', ['$routeParams', '$http', function ($routeParams, $http) {
	this.message = "I'm gonna show up on the screen";
	console.log("I'm up and running");
}]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({ enabled: true });
	$routeProvider.
		when('/', {
			templateUrl: '/angular_templates/index.html',
			controller: 'apiCtrl',
			controllerAs: 'ctrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);