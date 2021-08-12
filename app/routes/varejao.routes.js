const { authJwt, verifyVarejao, verifyMacapa } = require("../middleware");
const controller = require("../controllers/varejao.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/v1/varejao",
    [
      authJwt.verifyToken,
      authJwt.isVarejao,
      verifyVarejao.checkDuplicateCelular,
    ],
    controller.addContact
  );

  app.put(
    "/api/v1/varejao",
    [
      authJwt.verifyToken,
      authJwt.isVarejao,
    ],
    controller.addAllContacts
  );
};
