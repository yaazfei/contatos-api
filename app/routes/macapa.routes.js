const { authJwt, verifyMacapa } = require("../middleware");
const controller = require("../controllers/macapa.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/v1/macapa",
    [
      authJwt.verifyToken,
      authJwt.isMacapa,
      verifyMacapa.checkDuplicateCelular,
    ],
    controller.addContact
  );

  app.put(
    "/api/v1/macapa",
    [
      authJwt.verifyToken,
      authJwt.isMacapa
    ],
    controller.addAllContacts
  );
};
