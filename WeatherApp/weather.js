$.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
         .done (function(location) {
        $('#state').html(location.state);
            $('#data').html(location.city);         
         });

$.getJSON('api.openweathermap.org/data/2.5/weather?zip={city name},{country code},APPID=d98d5029fe9848422b7e195f21c3ecc4') 
         .done (function(location) {
        $('#weather').html(weather.id);
            $('#temp').html(main.temp);         
         });
