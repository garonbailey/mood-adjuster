var app = angular.module('MoodAdjuster', ['ngRoute']);

app.controller('apiCtrl', ['$routeParams', '$http', function ($routeParams, $http) {
	this.message = "I'm gonna show up on the screen";
}]);

app.controller('searchCtrl', ['$routeParams', '$http', '$scope', function ($routeParams, $http, $scope) {
	this.message = "Search Page; Form goes here!";

	var controller = this;
	controller.search = function () {
		var mood = controller.mood;
		var action = controller.change;

		if (action === "Reinforce My Mood") {
			if (mood === "Surprise") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					console.log(res.data);
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=" + mood + "&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					console.log(res.data);
				}, function error(res) {
					controller.message = "Error processing request"
				});
			}
		} else {
			if (mood === "Sad") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=happy&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					console.log(res.data);
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Happy") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=miserable&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					console.log(res.data);
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Angry") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=peaceful&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					console.log(res.data);
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Content") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=upset&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					console.log(res.data);
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Nervous") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=calm&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					console.log(res.data);
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Edgy") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=laid-back&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					console.log(res.data);
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Annoyed") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=pleased&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					console.log(res.data);
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Calm") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=agitated&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					console.log(res.data);
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Relaxed") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=tense&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					console.log(res.data);
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Surprise") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					console.log(res.data);
				}, function error(res) {
					controller.message = "Error processing request"
				});
			}
		}

		console.log("Selected Mood: ", mood);
		console.log("Selected Action: ", action);
	};
}]);

app.controller('resultCtrl', ['$routeParams', '$http', function ($routeParams, $http) {
	this.message = "Result Page; Auto re-direct here?"
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
			templateUrl:  '/angular_templates/searchin.html',
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