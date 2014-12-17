angular.module("iwishPrototype", ['ui.router']).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider.
		state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		});
	$urlRouterProvider.otherwise('home');
}]).
factory('posts', [function(){
	var o = {
		posts: [
		{title: 'post1', upvotes: 5},
		{title: 'post2', upvotes: 4},
		{title: 'post2', upvotes: 4},
		{title: 'post2', upvotes: 24},
		{title: 'post2', upvotes: 4, link: 'sdf'}]
	};
	return o;
}]).
controller('MainCtrl', [
'$scope', 'posts',
function($scope, posts) {
	$scope.posts = posts.posts;
	$scope.test = 'Hello world!';

	$scope.addPost = function() {
		if (!$scope.title) return;
		$scope.posts.push({title: $scope.title, upvotes: 0, link: $scope.link});
		$scope.title = '';
		$scope.link = '';
	}

	$scope.incrementUpvotes = function(post) {
		post.upvotes++;
	}
}]);