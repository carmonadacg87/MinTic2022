const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema(
  {
    name: {
      type: String,
    },
    codigo: {
      type: String,
    },
    cant: {
      type: Number,
    },
  },
  {
    collection: "productos",
  }
);

module.exports = mongoose.model("Producto", productSchema);