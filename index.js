var http = require ('http');

var good = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"})
  response.end("<h4> you are a nice one! </h4>");
});

var bad = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"})
  response.end("<h4> you are a naughty one! Yes, you are  ... </h4>");
});

var type = process.argv[2];

if (type === "good"){
  good.listen(7000, function(){
    console.log('We are listening to port 7000');
  });
} else if (type === "bad"){
  bad.listen(7500, function(){
    console.log('We are listening to port 7500');
  });
}
