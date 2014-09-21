var _gaq = _gaq || [];
var hasGASetup = false;

function setupGA(GAID){
  _gaq.push(['_setAccount', GAID]);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  hasGASetup = true;
}

window.onerror = function(msg, url, line, col, error){
	var errorMessage = msg + error.stack.split("\n")[1];
	if (hasGASetup){
		_gaq.push(['Error', 'javascript', 'Advanced Forms', errorMessage]);
		console.log(msg + error.stack.split("\n")[1]);
		console.log('Error sent to GA');
	}
	else{
		console.log(errorMessage);
	}
	
}