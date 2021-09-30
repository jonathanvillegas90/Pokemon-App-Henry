const { Router } = require("express");
const axios = require("axios");
const { Pokemon } = require("../db");
const { uuid } = require("uuidv4");

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      const namePokemon = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      let pokemon = {
        id: namePokemon.data.id,
        name: namePokemon.data.forms[0].name,
        photo: namePokemon.data.sprites.front_default,
        weight: namePokemon.data.weight,
        height: namePokemon.data.height,
        life: namePokemon.data.stats[0].base_stat,
        attack: namePokemon.data.stats[1].base_stat,
        defense: namePokemon.data.stats[2].base_stat,
        speed: namePokemon.data.stats[5].base_stat,
      };
      res.send(pokemon);
    } catch (error) {
      console.log(error);
      res.status(404).send({ error: "Not found" });
    }
  } else {
    try {
      const apiPokemonPromise = await axios.get(
        "https://pokeapi.co/api/v2/pokemon"
      );
      const dbPokemonPromise = await Pokemon.findAll();
    } catch (error) {
      res.status(404).send({ error: "Algo fallo en la peticion principal" });
    }
    let apiPokemon = [];
    for (let i = 0; i < apiPokemonPromise.data.results.length; i++) {
      try {
        let pokeResponse = await axios.get(
          apiPokemonPromise.data.results[i].url
        );
        let pokemon = {
          id: pokeResponse.data.id,
          name: pokeResponse.data.name,
          photo: pokeResponse.data.sprites.front_default,
          weight: pokeResponse.data.weight,
          height: pokeResponse.data.height,
          life: pokeResponse.data.stats[0].base_stat,
          attack: pokeResponse.data.stats[1].base_stat,
          defense: pokeResponse.data.stats[2].base_stat,
          speed: pokeResponse.data.stats[5].base_stat,
        };
        apiPokemon.push(pokemon);
      } catch (error) {
        console.log(error);
        res.status(404).send({ error: "not found" });
      }
    }
    var allPokemons = apiPokemon.concat(dbPokemonPromise);
    res.send(allPokemons);
    // return Promise.all([apiPokemonPromise, dbPokemonPromise]).then(
    //   (resultado) => {
    //     //console.log(resultado[0].data.results.length);
    //     var apiPokemon = resultado[0].data.results;
    //     var dbPokemon = resultado[1];
    //     var allPokemons = apiPokemon.concat(dbPokemon);
    //     res.send(allPokemons);
    //   }
    // );
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let pokeid = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let pokemon = {
      id: pokeid.data.id,
      name: pokeid.data.forms[0].name,
      photo: pokeid.data.sprites.front_default,
      weight: pokeid.data.weight,
      height: pokeid.data.height,
      life: pokeid.data.stats[0].base_stat,
      attack: pokeid.data.stats[1].base_stat,
      defense: pokeid.data.stats[2].base_stat,
      speed: pokeid.data.stats[5].base_stat,
    };
    res.send(pokemon);
  } catch (error) {
    console.log(error);
  }
});
router.post("/", (req, res) => {
  const { name, weight, height, life, attack, defense, speed, type1, type2 } =
    req.body;
  let pokemon = {
    id: uuid(),
    name: name,
    weight: weight,
    height: height,
    life: life,
    attack: attack,
    defense: defense,
    speed: speed,
  };
  Pokemon.create(pokemon);
  res.send("pokemon creado correctamente");
});

module.exports = router;
