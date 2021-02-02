const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = 5000;

app.use("/static", express.static(__dirname + "/static"));
app.set("view engine", "ejs")

const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:27017", {useUnifiedTopology: true}, { useNewUrlParser: true }, (error, client) => {
    const blog = client.db("blog");
    console.log("DB Connected")

    app.get("/", (req, res) => {
        res.send("Hello World!!!")
   });

   app.get("/admin/dashboard", (req, res) => {
       res.render("admin/dashboard")
   });
   
   
   app.listen(PORT, () => console.log(`http://localhost:${PORT}`
   ));
});