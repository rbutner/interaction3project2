

$(document).ready(function(){


	$.ajax({
		type: 'GET',
		url: 'https://raw.githubusercontent.com/rbutner/JSON/master/finaljson.json',
		dataType: 'json',
		success: function(data) {
			$.each(data, function(i, sign){
        $('#message').append('<div class="sign ' + sign.color + '">' +  sign.text +  /*'<img src="http://kylie.com/images/' +  sing.image + */' </div>'); });
		},
    complete: function() {

/*
      $('.sign').each(function(i, v) {
		    $(this).delay(400 * i).fadeIn(300); 
      });
*/

      $('.sign').click(function() {
		  
				var text = $(this).text();
// 			$( this ).toggle( "pulsate" );
//        	alert(text);
      		$(this).delay(100).fadeOut(10);
      })
		}

	});
	

});

