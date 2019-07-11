var express=require("express");
var bodyParser=require("body-parser");
var app=express();
app.use(bodyParser());
app.use(bodyParser.json());
app.use(express.static("public"));
app.set('view engine','ejs');
var firebase = require('firebase');


var firebaseConfig = {
    apiKey: "AIzaSyCBa0QBEbH0BebdBPWDZX5QdckxPijtSF8",
    authDomain: "gimd4u-3b723.firebaseapp.com",
    databaseURL: "https://gimd4u-3b723.firebaseio.com",
    projectId: "gimd4u-3b723",
    storageBucket: "",
    messagingSenderId: "997702665140",
    appId: "1:997702665140:web:1de0e4b81363c1ff"
  };
  firebase.initializeApp(firebaseConfig);

  
app.get("/",function(req,res){
        res.render("index.ejs"); 
})
app.get("/appointment",function(req,res){
    res.render('appointment.ejs')
})

app.get("/faqs",function(req,res){
    var db = firebase.database();
    var ref = db.ref("/responce");
    ref.on("value", function(snapshot) {
        var data = snapshot.val();
      
    res.render('fAQ.ejs', {faq : data});
});
});
app.get("/admin",function(req,res){
    res.render('admin/login.ejs');

})

app.get("/adminpanel",function(req,res){
    var db = firebase.database();
    var ref = db.ref("/request");
    ref.on("value", function(snapshot) {
        var data = snapshot.val();
    res.render('admin/list.ejs',{datas:data});
})
})

app.listen(8080,process.env.IP,function(){
    console.log("Server Started");
})
