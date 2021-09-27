const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Type } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req, res) => {
  res.json("inicio cargado correctamente");
});

router.get("/pokemon", async (req, res) => {
  const apiPokemonPromise = axios.get("https://pokeapi.co/api/v2/pokemon");
  const dbPokemonPromise = await Pokemon.findAll();

  return Promise.all([apiPokemonPromise, dbPokemonPromise]).then(
    (resultado) => {
      var apiPokemon = resultado[0].data.results;
      var dbPokemon = resultado[1];
      var allPokemons = apiPokemon.concat(dbPokemon);
      res.send(allPokemons);
    }
  );
});

module.exports = router;
