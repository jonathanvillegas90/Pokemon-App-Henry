const { Router } = require("express");
const axios = require("axios");
const { Type } = require("../db");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const apiTypePokemonResponse = await axios.get(
      "https://pokeapi.co/api/v2/type"
    );
    let apiTypePokemon = apiTypePokemonResponse.data.results;
    const dbType = await Type.findAll({ attributes: ["id", "name"] });
    if (dbType > 0) {
      res.send(dbType);
    } else {
      Type.bulkCreate(apiTypePokemon);
      const dbType = await Type.findAll({ attributes: ["id", "name"] });

      res.send(dbType);
    }
  } catch (error) {
    // next(error);
    console.log("aca entro");
  }
});

module.exports = router;
