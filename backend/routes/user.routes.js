const { checkJwt}  = require('./jwtMiddleware.js');

module.exports = app => {
    const utilisateur = require("../controllers/user.controllers.js");
  
    let router = require("express").Router();
  

    router.post("/login", utilisateur.login);
    router.post("/register", utilisateur.register);
  
    app.use('/user', router);
  };
