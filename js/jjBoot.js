// factory and data for select tag, bootstrap glyphicons

var jjBoot = angular.module('jjBoot', ['ngRoute']);

jjBoot.config(function($routeProvider) {
  $routeProvider.when('/cssBoot', {
      templateUrl: 'cssBoot.html',
      controller: 'cssBootCtrl',
  });
  $routeProvider.when('/main', {
      templateUrl: 'binding.html',
      controller: 'bindingCtrl'
  });

  $routeProvider.otherwise({ redirectTo: '/main'});

});

jjBoot.controller('navCtrl', function($scope, $location) {
  $scope.$location = $location;
});

jjBoot.controller('cssBootCtrl', function($scope, $location) {
    $scope.model = { message: 'hello world' }
});

jjBoot.controller('bindingCtrl', function($scope, $location) {

});




jjBoot.factory('Selections', function() {
	var Selections = {};
	Selections.list = [
		{
			name: "User Icon",
			val: "user"
		},
		{
			name: 'Envelope Icon',
			val: 'envelope'
		},
		{
			name: 'Pencil Icon',
			val: 'pencil'
		},
		{
			name: 'TH List Icon',
			val: 'th-list'
		},
		{
			name: 'Ok Icon',
			val: 'ok'
		},
		{
			name: 'Inbox Icon',
			val: 'inbox'
		},
		{
			name: 'Map Marker Icon',
			val: 'map-marker'
		}
	];
	return Selections;
});

function SelectionCtrl($scope, Selections) {
	$scope.selections = Selections;
  $scope.data = {list: 'user'}
}


jjBoot.factory('Booted', function() {
	var Booted = {};
	Booted.list = [
      {
        name: "Dropdown",
        cssname: "dropdown"
      },
      {
        name: "Button",
        cssname: "btn / btn-group"
      },
      {
        name: "Button Sizes",
        cssname: "btn-default, btn-sm, btn-lg"
      },
      {
        name: "Grid system",
        cssname: "col-(size)-(width) / size(xs,sm,md,lg) width(1-12) "
      },
      {
        name: "Headline",
        cssname: "Standard sizes h1-h6"
      },
      {
        name: "Alignment",
        cssname: "text-left, text-center, text-right"
      },
      {
        name: "Images",
        cssname: "img-rounded, img-circle, img-thumbnail"
      },
      {
        name: "Wells",
        cssname: "well, size adds(-sm, -lg)"
      },
      {
        name: "Label",
        cssname: "label / label-default"
      },
      {
        name: "Alerts",
        cssname: "alert / -success, -info, -warning, -danger"
      },
      {
        name: "Progress Bar (requires inner div)",
        cssname: "progress(outer), progress-bar(inner)"
      }
    ];
    return Booted;
});

function BootCtrl($scope, Booted) {
	$scope.booted = Booted;
}