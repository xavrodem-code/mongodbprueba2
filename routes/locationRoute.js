const express = require("express");
const router = express.Router();
const Location = require("../models/locationModel");

router.get("/api/location/", async (req, res, next) => {
  let locations;
  try {
    locations = await Location.find({});
  } catch (err) {
    const error = new Error("Ha habido un problema buscando los datos");
    error.code = 500;
    return next(error);
  }
  res.status(200).json({
    locations: locations,
  });
});

module.exports = router;
