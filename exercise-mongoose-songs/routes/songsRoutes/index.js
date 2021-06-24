// Importar routes desde express

// Crear la ruta para GET
// Crear la ruta para POST
// Crear la ruta para PUT
// Crear la ruta para DELETE

// Exportar la ruta

/* Importamos el router desde la librería express*/
const router = require("express").Router();
const SongsModel = require("../../models/Songs");

/* Aquí estamos creando el CRUD para los libros */

router.get("/all", async (req, res) => {
  const result = await SongsModel.find({});
  res.send(result);
});

router.get("/random", async (req, res) => {
  const result = await SongsModel.aggregate([{ $sample: { size: 1 } }]);
  res.send(result);
});

router.post("/create-song", async (req, res) => {
  const newSong = req.body;
  const result = await SongsModel.create(newSong);
  res.send(result);
});

router.put("/update-song/:youtube_id", async (req, res) => {
  const modifiedSong = req.body;
  const searchParam = req.params.youtube_id;

  const result = await SongsModel.findOneAndUpdate(
    { youtube_id: searchParam }, // el campo por el que busca para encontrar el documento
    modifiedSong, // los campos que actualiza
    { new: true } // para devolver el documento actualizado o el de antes de actualizar
  );
  console.log("Libro Modificado: " + result);
  res.send(result);
});

router.delete("/delete-one/:youtube_id", async (req, res) => {
  const { youtube_id } = req.params;
  const result = await SongsModel.findOneAndDelete({ youtube_id });
  res.send(result);
});

module.exports = router;
