const db = require("../models/postgres");
const ROLES = db.ROLES;
const User = db.user;
const Contact = db.contact;

checkDuplicateCelular = (req, res, next) => {
  // Username
  console.log(`checkDuplicateCelular - ${req.body.celular}`);
  Contact.findOne({
    where: {
      celular: req.body.celular
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Celular já cadastrado no sistema"
      });
      return;
    }
    console.log(`checkDuplicateCelular - ${req.body.celular} OK`);
    next();
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Falha! Role não existe = " + req.body.roles[i]
        });
        return;
      }
    }
  }

  next();
};

const verifyVarejao = {
  checkDuplicateCelular: checkDuplicateCelular,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifyVarejao;
