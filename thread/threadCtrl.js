var app = angular.module('rtfmApp');

app.controller('ThreadCtrl', function ($scope, threadRef, commentsRef) {

	var thread = threadRef.$asObject();

    thread.$bindTo($scope, 'thread');

	$scope.createComment = function (username, text) {
    	$scope.comments.$add({
        	username: username.email,
        	text: text
      	});
    };    
});
