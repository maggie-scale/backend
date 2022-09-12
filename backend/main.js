const express = require("express");
const api = require("./api");

// api = {router}

let app = express();
app.use(express.json());

app.use(api.router);
app.listen(process.env.PORT||3000, (error) => {
  if (error) {
    console.log(error);
    process.exit(0);
  } else {
    console.log("Server started on port: 3000");
  }
});