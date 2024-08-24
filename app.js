console.log('Web serverni boshlash');
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");

// MongoDB call
const db = require("./server").db();
const mongodb = require("mongodb");

// 1 Entry code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2: Session code
//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    // console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});
// //TODO: code with db here
// app.get('/author', (req, res) => {
//     res.render("author", {user: user}) ;
// });
app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
        res.json({ state: "success" });
    }
);
});

app.get("/", function (req, res) {
    console.log('user entered /');
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("someting went wrong");
        } else {
            console.log(data);
            res.render("reja", { item: data});
        }
    } );
    
});

module.exports = app;