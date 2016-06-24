var app = angular.module('pollApp', [
	'ui.router',
	'ngResource',
	'angular-storage',
	'angular-jwt'
]);
app.value('RESTApiPath', 'http://130.211.251.107:30222/api');
