var app = angular.module('MoodAdjuster', ['ngRoute']);

app.controller('apiCtrl', ['$routeParams', '$http', function ($routeParams, $http) {
	var controller = this;
	$http({
		method: 'GET',
		url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC"
	}).then(function success(res) {
		controller.gif = res.data.data.image_url;
	}, function error(res) {
		controller.message = "Error processing request"
	});
}]);

app.controller('searchCtrl', ['$routeParams', '$http', '$scope', '$location', function ($routeParams, $http, $scope, $location) {
	var controller = this;
	this.gifUrl;
	controller.search = function () {
		var mood = controller.mood;
		var action = controller.change;

		this.gifUrl = controller.gifUrl;

		if (action === "Reinforce My Mood") {
			if (mood === "Surprise") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					controller.gifUrl = res.data.data.image_url;
					controller.message = "How does it make you feel?";
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=" + mood + "&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					controller.gifUrl = res.data.data[Math.floor(Math.random()*25)].images.original.url;
					controller.message = "Hope this is exactly the appeasement you're looking for.";
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
					controller.gifUrl = res.data.data[Math.floor(Math.random()*25)].images.original.url;
					controller.message = "Hope you feel better, buddy!";
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Happy") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=miserable&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					controller.gifUrl = res.data.data[Math.floor(Math.random()*25)].images.original.url;
					controller.message = "Did we successfully ruin your happiness, weirdo?";
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Angry") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=peaceful&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					controller.gifUrl = res.data.data[Math.floor(Math.random()*25)].images.original.url;
					controller.message = "Just tryin' to help you chill out, dude.";
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Content") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=upset&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					controller.gifUrl = res.data.data[Math.floor(Math.random()*25)].images.original.url;
					controller.message = "Did we successfully ruin your contented feelings?";
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Nervous") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=calm&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					controller.gifUrl = res.data.data[Math.floor(Math.random()*25)].images.original.url;
					controller.message = "Here's something to calm your nerves.";
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Edgy") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=laid-back&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					controller.gifUrl = res.data.data[Math.floor(Math.random()*25)].images.original.url;
					controller.message = "A little something to take the edge off.";
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Annoyed") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=pleased&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					controller.gifUrl = res.data.data[Math.floor(Math.random()*25)].images.original.url;
					controller.message = "Just breathe . . . and check out this gif.";
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Calm") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=agitated&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					controller.gifUrl = res.data.data[Math.floor(Math.random()*25)].images.original.url;
					controller.message = "I won't judge your lifestyle. Hope this successfully stresses you out.";
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Relaxed") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=tense&api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					controller.gifUrl = res.data.data[Math.floor(Math.random()*25)].images.original.url;
					controller.message = "Being relaxed is for losers! Rage!";
				}, function error(res) {
					controller.message = "Error processing request"
				});
			} else if (mood === "Surprise") {
				$http({
					method: 'GET',
					url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC"
				}).then(function success(res) {
					controller.gifUrl = res.data.data.image_url;
					controller.message = "Surprise! It's a random gif!";
				}, function error(res) {
					controller.message = "Error processing request"
				});
			}
		}
	};
}]);

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
		otherwise({
			redirectTo: '/'
		});
}]);