const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models/mysql");
const db2 = require("./app/models/postgres");
const Contact = db2.contact;
const Role = db.role;


db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Dropa e sincroniza base macapa { force: true }');
//   initial();
// });

db2.sequelize.sync();
// db2.sequelize.sync({ force: true }).then(() => {
//   console.log('Dropa e sincroniza base varejao { force: true }');
//   initial2();
// });



// simple route
app.get("/", (req, res) => {
  res.json({ message: "OK" });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/macapa.routes')(app);
require('./app/routes/varejao.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "insert_macapa"
  });

  Role.create({
    id: 2,
    name: "insert_varejao"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}

function initial2() {

  console.log(`Limpando contatos varejao...`);
  Contact.destroy({
    where: {},
    truncate: false
  });
}