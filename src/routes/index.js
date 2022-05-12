// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { default: axios } = require("axios");
const { Router } = require("express");
const PokemonRoute = require("../routes/PokemonRoute");
const TypeRoute = require("../routes/TypeRoute");
const { Type } = require("../db");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router();

router.use("/pokemon", PokemonRoute);
router.use("/type", TypeRoute);

module.exports = router;
