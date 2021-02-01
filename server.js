const express = require("express");
const app = express();
const PORT = 5000;

const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }, (error,client) => {
    let blog = client.db("blog");
    console.log("DB Connected")
} ),

app.get("/", (req, res) => {
     res.send("Hello World!!!")
})


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));