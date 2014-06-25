(function($) {
	$.getScript = function(url,success){
		if(!arguments[0])
		{
			url = "unknown";
		}
		if(!arguments[1])
		{
			success = function(){};
		}
		$.ajax({
		    cache:false,
		    type:'GET',
		    url:url,
		    dataType:"text",
		    success:function(text){
		        ( window.execScript || function( text ) {
		            window[ "eval" ].call( window, text );
		        } )( text );
		    	success(text);
		    }
		});
	}
})($);