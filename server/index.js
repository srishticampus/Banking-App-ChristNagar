const express = require("express");
const app = express();
const port = 4000;
const bodyparser = require("body-parser");

app.use(bodyparser.json());

const cors = require("cors");
app.use(cors());

app.listen(port, () => {
  console.log("port created");
});
