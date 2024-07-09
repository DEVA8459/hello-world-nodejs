const express = require("express");
const app = express();
// importing db
const db = require("./db");

// body parser

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body


app.get("/", function (req, res) {
  res.send("hey deva its your server ");
});

const personRoutes=require("./Routes/personRoutes")

//importing Router file

app.use('/person',personRoutes) 

app.get("/chicken", (req, res) => {
  res.send("sure we have chicken");
});
app.get("/Idli", (req, res) => {
  var costomise_Idli = {
    name: "rava idli",
    size: "10 inch",
    is_sambar: "true",
    is_chutney: "flase",
  };
  res.send(costomise_Idli);
});



app.listen(3000, () => {
  console.log("server zindaa hai");
});
// 3000 is a port
