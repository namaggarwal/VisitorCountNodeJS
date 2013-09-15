// We need an http server
var http = require('http'); 
//Count the number of visits to the page
var countVisit = 0;

//Create an http Server
http.createServer(function (req, res) {

	//Check if request is not for favicon
	if(req.url!="/favicon.ico"){
		//increment the counter
		countVisit++;
	}
	//Start creating response
    res.writeHead(200, {'Content-Type': 'text/html'});
    //Get the page html
    var html = getPageHtml(); 
    //write html to response
    res.write(html);
    //End the response (This sends response to client)
    res.end();
}).listen(1337, '127.0.0.1'); // Http server at port 1337 on localhost
//Log that server is running
console.log('Server running at http://127.0.0.1:1337/');

//Function to get basic html page 
var getPageHtml = function(){
	var html="";
	html = "<html>";
	html += "<head>";
	html += "<style type='text/css'>";
	html += "body div{position:absolute;height:200px;text-align:center;font-family:'Trebuchet MS';font-size:26px;margin:auto;top:0px;bottom:0px;left:0px;right:0px}";
	html += "</style>";
	html += "</head>";
	html += "<body>";
	html += "<div>";
	html += "<h1>You are visitor number "+countVisit+"</h1>";
	html += "</div>";
	html += "</body>";
	html += "</html>";

	return html;
};