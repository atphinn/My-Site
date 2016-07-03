$(document).ready(function(){
  $('button')
    .animate({ marginLeft: '600px'},3000)
    .animate({ marginTop: '-300px', marginLeft: "0"},3000)
    .animate({ marginTop: "-100",},3000);
    $("#welcome").fadeIn(9000).delay(10000);
});

$("button").click(function() {
	$('#container').fadeIn(4000);
	$('button').hide()

	// body...
});



$("#about").click(function() {
		$('#bio').fadeIn(3000);
	}

);

$(function () {
      $('#contact').click(function (event) {
        var email = 'atphinn@gmail.com';
        var subject = 'Test';
        document.location = "mailto:"+email;
      });
    });
