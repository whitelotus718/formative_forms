const express = require("express");
const csurf = require('csurf');
const cookieParser = require('cookie-parser'); 
const csrfProtection = csurf({ cookie: true });

const app = express();
app.use(cookieParser());
app.use(express.urlencoded());

const port = process.env.PORT || 3000;

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", {users} );
});

const users = [
  {
    id: 1,
    firstName: "Jill",
    lastName: "Jack",
    email: "jill.jack@gmail.com"
  }
];

app.get("/create", csrfProtection, (req, res) => {
  res.render("create", { token: req.csrfToken()})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
