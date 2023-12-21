const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/empresa", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const vendedorSchema = new mongoose.Schema({
  nombre: String,
  producto: String,
  email: String
});

const Vendedor = mongoose.model("Vendedor", vendedorSchema);

module.exports = Vendedor;