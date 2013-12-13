require("cloud/app.js");
// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

/* AV.Cloud.define('login', function(request, response){
	//var user = AV.Object.extend("admin");
	response.success('hello');
}); */
