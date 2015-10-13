var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope','$http',function($scope, $http){
	console.log("Hola desde el controller");

	$http.get('/contactlist').success(function(response){
		console.log("tengo la data que pedi");
		$scope.contactlist = response;
	});


	// $scope.contactlist = contactlist;
}]);
