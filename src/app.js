const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = 10101;
// const port = process.env.PORT || 10101;

// public static path
const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));

// Routing
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "Opps! Page not found Please click the correct link.",
  });
});

app.listen(port, () => {
  console.log(`Listening to the port at ${port}`);
});
