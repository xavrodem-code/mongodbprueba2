const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  pais: {
    type: String,
    required: true,
    trim: true,
  },
  zona: {
    type: String,
    required: true,
    trim: true,
  },
  fechaInicio: {
    type: String,
    required: true,
    trim: true,
  },
  fechaFin: {
    type: String,
    required: true,
    trim: true,
  },
  especie: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Location", locationSchema);
