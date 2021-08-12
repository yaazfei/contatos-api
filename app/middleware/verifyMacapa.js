const db = require("../models/mysql");
const ROLES = db.ROLES;
const User = db.user;
const Contact = db.contact;

checkDuplicateCelular = (req, res, next) => {
  // Username
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
    next();
    
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifyMacapa = {
  checkDuplicateCelular: checkDuplicateCelular,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifyMacapa;
