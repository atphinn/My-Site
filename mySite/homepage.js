
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



// $(function () {
//       $('#contact').click(function (e, event) {
//         e.preventDefault();
//         var email = 'atphinn@gmail.com';
//         //var subject = 'Test';
//         document.location = "mailto:"+email;
//       });
//     });