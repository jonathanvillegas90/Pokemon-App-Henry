const { Router } = require("express");
const axios = require("axios");
const { Pokemon } = require("../db");
const { uuid } = require("uuidv4");

const router = Router();

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  if (name) {
    //trae pokemon por nombre
    try {
      const namePokemonDB = await Pokemon.findOne({ where: { name } });
      if (namePokemonDB !== null) {
        res.send(namePokemonDB);
      } else {
        const namePokemonAPI = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        let pokemon = {
          id: namePokemonAPI.data.id,
          name: namePokemonAPI.data.forms[0].name,
          photo: namePokemonAPI.data.sprites.front_default,
          type: namePokemonAPI.data.types[0].type.name,
          weight: namePokemonAPI.data.weight,
          height: namePokemonAPI.data.height,
          hp: namePokemonAPI.data.stats[0].base_stat,
          attack: namePokemonAPI.data.stats[1].base_stat,
          defense: namePokemonAPI.data.stats[2].base_stat,
          speed: namePokemonAPI.data.stats[5].base_stat,
        };
        res.send(pokemonFind);
      }
    } catch (error) {
      next(error);
    } //busqueda por nombre de pokemon en BD y API
  } else {
    let apiPokemonPromise = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40"
    );
    apiPokemonPromise = apiPokemonPromise.data.results;
    let apiPokemon = apiPokemonPromise.map((pokemon) => axios.get(pokemon.url));
    apiPokemon = await Promise.all(apiPokemon).then((responses) => {
      let pokemon = responses.map((response) => {
        return {
          id: response.data.id,
          name: response.data.name,
          photo: response.data.sprites.front_default,
          typePokemon: response.data.types[0].type.name,
        };
      });
      return pokemon;
    });
    const dbPokemonPromise = await Pokemon.findAll({
      attributes: ["name", "pokemonType"],
    });
    const allPokemons = apiPokemon.concat(dbPokemonPromise);
    res.send(allPokemons);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  if (id.length > 4) {
    try {
      let pokeIDBD = await Pokemon.findOne({ where: { id } });
      res.send(pokeIDBD);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      let pokeid = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let pokemon = {
        id: pokeid.data.id,
        name: pokeid.data.forms[0].name,
        photo: pokeid.data.sprites.front_default,
        weight: pokeid.data.weight,
        height: pokeid.data.height,
        hp: pokeid.data.stats[0].base_stat,
        attack: pokeid.data.stats[1].base_stat,
        defense: pokeid.data.stats[2].base_stat,
        speed: pokeid.data.stats[5].base_stat,
      };
      res.send(pokemon);
    } catch (error) {
      next(error);
    }
  }
});

router.post("/", (req, res, next) => {
  const { name, weight, height, hp, attack, defense, speed } = req.body;
  let { type } = req.body;
  if (!type) {
    type = "unknown";
  }
  let pokemon = {
    id: uuid(),
    name: name,
    weight: weight,
    height: height,
    hp: hp,
    attack: attack,
    defense: defense,
    speed: speed,
    pokemonType: type,
  };
  try {
    Pokemon.create(pokemon);
    res.send("pokemon creado correctamente");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
