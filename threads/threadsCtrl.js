var app = angular.module('rtfmApp');

app.controller('ThreadsCtrl', function ($scope, threadsRef) {

	$scope.threads = threadsRef.$asArray();

	$scope.threads.$loaded().then(function (threads) {
     	console.log(threads);
    });

	$scope.createThread = function (username, title) {
    	$scope.threads.$add({
    		username: username.email,
    		title: title
      	});
    }

});
