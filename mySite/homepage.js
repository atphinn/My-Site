$(document).ready(function(){
   
     $("#button")
        .animate({marginLeft: '600px'},3000)
        .animate({ marginTop: '-300px', marginLeft: "500px"},2000)
        .animate({ marginTop: '-100',},2000)
        .animate({fontSize: '3em'}, "slow")
        $("#welcome").fadeIn(9000).delay(10000);
});


$("#button").click(function() {
  $('#container').fadeIn(4000);
  $('#button').hide()

  // body...
});



$("#about").click(function() {
    $('.works').hide();
    $('#bio').fadeIn(3000);
   
  }

);

$("#portfolio").click(function() {
    $('#bio').hide();
    $('.works').fadeIn(3000);
  
  }

);

$("#logo").click(function() {
    $('#bio').hide();
    $('.works').hide();
  
  }

);



$(function () {
      $('#contact').click(function (event) {
        var email = 'atphinn@gmail.com';
        //var subject = 'Test';
        document.location = "mailto:"+email;
      });
    });