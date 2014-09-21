var hasGASetup = false;

function setupGA(GAID){
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','http://www.google-analytics.com/analytics.js','ga');

	ga('create', GAID, 'auto');
	ga('send', 'pageview');

	hasGASetup = true;
}

window.onerror = function(msg, url, line, col, error){
	var errorMessage = msg + error.stack.split("\n")[1];
	if (hasGASetup){
		//_gaq.push(['Error', 'javascript', 'Advanced Forms', errorMessage]);
		ga('send', 'event', 'category', 'JSError', errorMessage);
		console.log(errorMessage);
		console.log('Error sent to GA');
	}
	else{
		console.log(errorMessage);
	}
	
}