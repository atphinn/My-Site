$('.projects').hide();


$("#about").click(function(e) {
    $('.projects').hide();
    $('.content').fadeIn(3000);
    e.preventDefault();
   
  }
);


$("#project").click(function(e) {
    $('.content').hide();
    $('.projects').fadeIn(3000);
    e.preventDefault();
   
  }
);