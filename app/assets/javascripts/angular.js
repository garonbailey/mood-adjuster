var app = angular.module('MoodAdjuster', ['ngRoute']);

app.controller('apiCtrl', ['$routeParams', '$http', function ($routeParams, $http) {
	this.message = "I'm gonna show up on the screen";
}]);

app.controller('searchCtrl', ['$routeParams', '$http', function ($routeParams, $http) {
	this.message = "Search Page; Form goes here!"
}]);

app.controller('resultCtrl', ['$routeParams', '$http', function ($routeParams, $http) {
	this.message = "Result Page; Auto re-direct?"
}])

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({ enabled: true });
	$routeProvider.
		when('/', {
			templateUrl: '/angular_templates/index.html',
			controller: 'apiCtrl',
			controllerAs: 'ctrl'
		}).
		when('/search', {
			templateUrl:  '/angular_templates/search.html',
			controller: 'searchCtrl',
			controllerAs: 'ctrl'
		}).
		when('/result', {
			templateUrl: '/angular_templates/result.html',
			controller: 'resultCtrl',
			controllerAs: 'ctrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);