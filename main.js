const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

app.use("/", require("./routes/locationRoute"));

app.use((req, res) => {
  res.status(404);
  res.json({ mensaje: "Not Found!" });
});

mongoose
  .connect(
    "mongodb+srv://xavrodem:Javichu996@cluster0.eiuvjey.mongodb.net/investigacion?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(
      5000,
      () => console.log("Servidor escuchando en puerto 5000"),
      console.log("Conectado a la base")
    );
  })
  .catch((err) => console.log(err));
