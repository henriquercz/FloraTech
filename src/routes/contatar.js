var express = require("express");
var router = express.Router();

var contatarController = require("../controllers/contatarController");

//Recebendo os dados do html e direcionando para a função cadastrar de contatarController.js
router.post("/contatar", function (req, res) {
    contatarController.contatar(req, res);
})

module.exports = router;