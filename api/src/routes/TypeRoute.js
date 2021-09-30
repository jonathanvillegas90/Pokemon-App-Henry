const { Router } = require("express");
const axios = require("axios");
const { Type } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  const apiTypePromise = axios.get("https://pokeapi.co/api/v2/type");
  const dbTypePromise = await Type.findAll();

  return Promise.all([apiTypePromise, dbTypePromise]).then((resultado) => {
    var apiType = resultado[0].data.results;
    var dbType = resultado[1];
    var allType = apiType.concat(dbType);
    res.send(allType);
  });
});

module.exports = router;
