const express = require("express");
const router = express.Router();
const Libro = require("../models/libro");

// Importamos la librería para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

// Ruta para obtener todos los libros
router.get("/", requiredScopes("read:libros"), async (req, res) => {
  // router.get("/", async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los libros" });
  }
});

// Ruta para crear un nuevo Libro
router.post("/", requiredScopes("write:libros"), async (req, res) => {
  // router.post("/", async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    await nuevoLibro.save();
    res.json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Libro" });
  }
});

// Ruta para actualizar un Libro existente
router.put("/:id", requiredScopes("write:libros"), async (req, res) => {
  // router.put("/:id", async (req, res) => {
  try {
    const Libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(Libro);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Libro" });
  }
});

// Ruta para eliminar un Libro
router.delete("/:id", requiredScopes("write:libros"), async (req, res) => {
  // router.delete("/:id", async (req, res) => {
  try {
    await Libro.findByIdAndDelete(req.params.id);
    res.json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el Libro" });
  }
});

module.exports = router;
