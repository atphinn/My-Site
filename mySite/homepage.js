$('#bio').hide();
$('.works').hide();

$("#about").click(function(e) {
    $('.works').hide();
    $('#bio').fadeIn(3000);
    e.preventDefault();
   
  }

);

$("#portfolio").click(function(e) {
    $('#bio').hide();
    $('.works').fadeIn(3000);
    e.preventDefault();
  }

);

$("#logo").click(function() {
    $('#bio').hide();
    $('.works').hide();
  
  }

);



