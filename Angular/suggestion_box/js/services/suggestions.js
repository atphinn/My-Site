app.factory('suggestions', [function(){
  var demoSuggestions = {
    posts: [
      {
        title: 'Free pizza at club meetings',
        upvotes: 15,
        comments: ['is it free tho?', 'nice!']
      },
      {
        title: 'End all club emails with Laffy Taffy jokes',
        upvotes: 9,
        comments: ['he he hu he hu ha ha', 'holy christ']
      },
      {
         title: 'Retrofit water fountain with Gatorade',
         upvotes: 3,
         comments: ['holy moly', 'stupid idea']
      },
      {
         title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
         upvotes: 7,
         comments: ['not funny']
      }
    ]
  };
  return demoSuggestions;
}]);