const router = require("express").Router();

/* En esta linea estamos utilizando el use() donde como primer parametro 
le pasamos el path para URL y como segundo parametro el fichero*/
router.use("/songs", require("./songsRoutes"));

module.exports = router;

// Importar routes desde express

// Crear la ruta para las songs

// Exportar la ruta
