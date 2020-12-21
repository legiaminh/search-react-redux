// create server application and take the REST call
const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.get("/employees", (req, res) => {
  console.log("Hit server ...");
  getData().then((list) => {
    res.send(list);
  });
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

async function getData() {
  const rs = await fetch("http://localhost:3000/employees");
  const result = await rs.json();
  return result;
}
