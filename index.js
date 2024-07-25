const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req,res) => {
	const url = "mongodb+srv://komallondhe083:l6QcWbddOXQZ4Pyd@cluster0.jccns0a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("doubt23july24");
	const coll = db.collection("student");
	const record = {"name" : req.body.name, "doubt" : req.body.doubt, "num" : req.body.num};
	coll.insertOne(record)
	.then(result => res.send(result))
	.catch(error => res.send(error));
});
app.listen(9000, () => { console.log("ready @ 9000"); } );	