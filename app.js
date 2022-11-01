const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    var js_type = req.body.type;
    var js_data = req.body.data;
    var js_labels = req.body.labels;
    var js_labels_dataset = req.body.labels_dataset;
    console.log(js_type);
    console.log(js_data);
    console.log(js_labels);
    console.log(js_labels_dataset);

    const url = "https://quickchart.io/chart?c={type:'" + js_type + "',data:{labels:[" + js_labels + "],datasets:[{label:'" + js_labels_dataset + "',data:[" + js_data +"]}]}}"

    https.get(url, function(response){
        console.log(response.statusCode);
    })

    res.redirect(url);
})

app.listen(666, function(){
    console.log("Listening on port 666...")
})
