// factory and data for select tag, bootstrap glyphicons

var jjBoot = angular.module('jjBoot', ['ngRoute']);

jjBoot.config(function($routeProvider) {
  $routeProvider.when('/glyphicon', {
      templateUrl: 'glyphicon.html',
      controller: 'glyphBootCtrl',
  });
  $routeProvider.when('/main', {
      templateUrl: 'classes.html',
      controller: 'classBootCtrl'
  });

  $routeProvider.otherwise({ redirectTo: '/main'});

});

jjBoot.controller('navCtrl', function($scope, $location) {
  $scope.$location = $location;
});

jjBoot.controller('classBootCtrl', function($scope, $location) {

  $scope.title = 'CLASS ';
  $scope.titleImg  = 'IMAGE';

});

jjBoot.controller('glyphBootCtrl', function($scope, $location, $q) {
    $scope.title = 'GLYPHICON ';


    // var defer = $q.defer();

    // defer.promise
    //   .then(function(weapon){
    //       alert('I brought a ' + weapon);

    //       return "bow"
    //   })
    //   .then(function(weapon){
    //       alert('Me too ' + weapon);

    //       return "axe"
    //   })
    //   .then(function(weapon){
    //       alert('and I ' + weapon);
    //   })

    // defer.resolve("sword");

    $scope.model = { message: 'hello world' }
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

jjBoot.factory('pImg', function() {
  var pImg = {};
  pImg.list = [
      {
        name: "default",
        cssname: "none"
      },
      {
        name: "Rounded",
        cssname: "rounded"
      },
      {
        name: "Circle",
        cssname: "circle"
      },
      {
        name: "Thumbnail",
        cssname: "thumbnail"
      }
    ];
    return pImg;
});

function PropCtrl($scope, pImg) {
  $scope.pimg  = pImg;
  $scope.data = {list: 'none'}
}