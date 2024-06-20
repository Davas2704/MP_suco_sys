const express = require("express");
const path = require("path");
const hbs = require("express-handlebars")
const PORT = 3001;

const app = express ();

app.engine("hbs", hbs.engine({
    defaultlayout: "main",
    extname: "hbs"
}));

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "/public")))

const indexroute = require("./routes/indexRoute");

app.use("", indexroute);

app.listen (PORT, () => {
    console.log("running");
})