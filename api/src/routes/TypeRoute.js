const { Router } = require("express");
const axios = require("axios");
const { Type } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  const dbType = await Type.findAll();
  res.send(dbType);
});

module.exports = router;
