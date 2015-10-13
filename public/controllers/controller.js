var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope','$http',function($scope, $http){
	console.log("Hola desde el controller");

	person1 = {
		name: 'tim',
		email: 'tim@email.com'
		number: '555555555'
	};

	person2 = {
		name: 'emili',
		email: 'emi@pami.org'
		number: '123123123'
	};

	person3 = {
		name: 'rod',
		email: 'rod@mail.com'
		number: '333333333'
	};

	var contactlist = [person1,person2,person3]
	$scope.contactlist = contactlist;

}]);
