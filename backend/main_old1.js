const express = require("express");

let app = express();

let router = express.Router();
router.get("/", (request, response) => {
  response.send({ first_name: "Dixant", last_name: "Mittal" });
}); // GET

// a sum API which takes input from the request and returns the sum as response.
router.get("/sum", (request, response) => {
  let n1 = parsefloat(request.query.number1);
  let n2 = parsefloat(request.query.number2);
  let sum = n1 + n2;
//   response.send(`Sum: ${sum}`);
  response.send("Sum: " + sum);
});

app.use(router);
app.listen(3000, (error) => {
  if (error) {
    console.log(error);
    process.exit(0);
  } else {
    console.log("Server started on port: 3000");
  }
});
