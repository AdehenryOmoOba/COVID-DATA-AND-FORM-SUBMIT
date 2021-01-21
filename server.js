const datastore = require("nedb");
const Datastore = new datastore("formDatabase.db");
Datastore.loadDatabase();

const express = require("express");
const { request, response } = require("express");
const app = express();
app.listen(7000, () => {
  console.log("Port 7000 is live!");
});
app.use(express.static("client"));
app.use(express.json({ limit: "1mb" }));

app.get("/api", (request, response) => {
  Datastore.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.post("/api", (request, response) => {
  console.log(request.body);
  const data = request.body;

  Datastore.insert(data);
  response.json({
    status: "RECEIVED",
    DATE: data.date,
    USERNAME: data.username,
    PASSWORD: data.password,
  });
});
