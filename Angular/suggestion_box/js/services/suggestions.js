app.factory('suggestions', [function () {
	var demoSuggestions = {
		posts: [
			{
				title: 'Two hour Video Game night',
				upvotes: 3,
				comments: [],
			},
			{
				title: 'Pizza and Video Game night',
				upvotes: 11,
				comments: [],
			},
			{
				title: 'WWE time',
				upvotes: 5,
				comments: [],
			},
			{
				title: 'Prince dance party',
				upvotes: 12,
				comments: [],
			}
		]
	};

	return demoSuggestions;

}]);
