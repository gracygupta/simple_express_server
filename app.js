const express = require("express");

const app = express();

app.get("/", function (req, res) {
  var name = req.query.name;
  var movie = req.query.movie;

  var result = "";
  try {
    name = name.toUpperCase();
    result = "my name is " + name + ", fav movie is " + movie;
  } catch (error) {
    result = "name required";
  }
  res.send(result);
});

//demonstration of param
app.get("/route1/:parameter", function (req, res) {
  console.log(req.params);
  res.send("OK");
});

app.get("/calculate/:operation", function (req, res) {
  const opr = req.params.operation;
  console.log(req.params);
  console.log(req.query);

  if (opr == "add") {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const result = num1 + num2;
    res.send(result + "");
  } else if (opr == "sub") {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const result = num1 - num2;
    res.send(result + "");
  } else if (opr == "mul") {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const result = num1 * num2;
    res.send(result + "");
  } else if (opr == "div") {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const result = num1 / num2;
    res.send(result + "");
  } else {
    res.send("Operation not found...");
  }
});

app.listen(8000, function () {
  console.log("Server is up.");
});
