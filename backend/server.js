const express = require("express");
const { connect } = require("./db/connect");

/* Routers */
const routerUsers = require("./routers/user");
const routerExperiences = require("./routers/experience");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", routerUsers);
app.use("/api/v1", routerExperiences);

/* bdd conection */
connect("mongodb://localhost:27017/", (err) => {
  if (err) {
    console.log("Database connection error");
    process.exit(-1);
  } else {
    console.log("Database connected successfully");
  }
});

/* lunch app on port 3000 */
app.listen(3000);
console.log("Waiting for request on port 3000");
