var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/views'));

//use to view the details of each nurse homes on another page
// app.get("/details", function(req, res){
//     var id = req.get.name;
//     //var url = "https://carepulseuk-development.herokuapp.com/api/skills_assessment/?format=json";
//     request(id, function(error, response, body){
//         var data = JSON.parse(body);
//         res.render("details", {data: data});
//     })
// })

// to update the no of occupied beds : use app.put and the use an if statement to check the condition
//unable to complete due to lack of time
// app.put("/results/:id", fucntion(req, res){
//  request();
// });

app.get("/results",  function(req, res){
   request("https://carepulseuk-development.herokuapp.com/api/skills_assessment/?format=json", function(error, response, body){
if(!error && response.statusCode == 200){
    var data = JSON.parse(body)
    res.render("results", {data: data});
}
   });
});


app.listen(process.env.PORT || 3003, function(){
    console.log("App started");
});