// this is the app template from tutorial https://www.youtube.com/watch?v=8ILQOFAgaXE&index=2&list=FLwzNbQO-lg6684jAssu2N3g

// follow the tutorial, create login, logout, and page to view from controllers

var app = angular.module("app", ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'login.html',
		controller: 'LoginController'
	});

	$routeProvider.when('/home', {
		templateUrl: 'home.html',
		controller: 'HomeController'

	});

	$routeProvider.otherwise({ redirectTo : '/login' });
});

app.factory("AuthenicationService", function($location){
	return {
		login: function(credentials) {
			if(credentials.username !== "jason" || credentials.password !== "boom") {
				alert("username must be 'jason', password must be 'boom'");
				
			}
			else {
				$location.path('/home');
			}	
		},
		logout: function() {
			$location.path('/login');
		}
	}
});

app.controller('LoginController', function($scope, $location, AuthenicationService) {
	$scope.credentials = { username: "", password: ""};

	$scope.login = function() {
		AuthenicationService.login($scope.credentials);
	};
});

app.controller('HomeController', function($scope, AuthenicationService) {
	$scope.title = "Labels for Products";
	$scope.message = "Hover over the icons to change titles";

	$scope.logout = function() {
		AuthenicationService.logout();
	};
});

app.directive('showsMessageWhenHovered', function() {
	return {
		restrict: "A", // A = Attribute, C = Class Name, E = Element, M = HTML message
		link: function(scope, element, attributes) {
			var originalMessage = scope.message;
			element.bind("mouseover", function() {
				scope.message = attributes.message;
				scope.$apply();
			});
			element.bind("mouseout", function() {
				scope.message = originalMessage;
				scope.$apply();
			});
		}
	};
});