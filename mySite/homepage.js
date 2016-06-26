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
        document.location = "mailto:"+email+"?subject="+subject;
      });
    });
