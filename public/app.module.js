var app = angular.module('pollApp', [
	'ui.router',
	'ngResource',
	'angular-storage',
	'angular-jwt'
]);
app.value('RESTApiPath', 'http://104.155.201.119:3000/api');
