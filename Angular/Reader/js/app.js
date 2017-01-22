var app = angular.module('ReaderApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  	.when('/books', {
    	controller: 'BookshelfController',
    	templateUrl: 'views/bookshelf.html'
  })
  .when('.books/:bookId', {
    controller:
    'BookController',
    templateUrl:
    'views/books.html'
  })
  	.otherwise({
    	redirectTo: '/books'
  });
});