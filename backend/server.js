const express = require(`express`);
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());
const axios = require(`axios`);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
var corsOptions = {
  origin: "https://api.stocktwits.com",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.get("/todos/:id", function(req, res) {
  console.log("requesst:", req.params.id);
  axios
    .get(
      `https://api.stocktwits.com/api/2/streams/symbol/${req.params.id}.json`
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.error(error);
    });
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
