const { checkJwt}  = require('./jwtMiddleware.js');

module.exports = app => {
    const elements = require("../controllers/list.controllers.js");
  
    let router = require("express").Router();
   
    router.get("/",elements.get);

    app.use('/list', router);
  };
