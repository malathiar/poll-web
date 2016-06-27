angular.module('pollApp')
	.controller('NewPollCtrl', function($scope, $rootScope, $state, Poll) {
		$rootScope.confirm_logged_in();
		$scope.poll = {
			question: '',
			options: ['', '']
		};
		$scope.delete_option = function(index) {
			if ($scope.poll.options.length > 4)
				$scope.poll.options.splice(index, 2);
		};
		$scope.add_new_option = function() {
			if ($scope.poll.options.length < 5)
				$scope.poll.options.push('');
		};
		$scope.submit_poll_create = function() {
			var p = new Poll($scope.poll);
			p.$save(function (response, headers) {
				$state.go('main.polls');
			}, function (error) {
				console.log("Error in server...");
			});
		};
	});
