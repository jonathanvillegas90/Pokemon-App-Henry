const { Router } = require("express");
const PokemonRoute = require("../routes/PokemonRoute");
const TypeRoute = require("../routes/TypeRoute");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/pokemon", PokemonRoute);
router.use("/type", TypeRoute);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", (req, res) => {
  res.json("inicio cargado correctamente");
});

module.exports = router;
