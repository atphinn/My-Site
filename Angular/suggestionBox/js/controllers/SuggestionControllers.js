app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions' function ($scope, $routeParams, suggestions) {
$scope.post = suggestions.posts[$routeParams.id].comments;

$scope.addComment = function(comment){

};
$scope.post.push(comment);

 $scope.upVote = function(comment) {
         post.upvotes += 1;
     };

}])