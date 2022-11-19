let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Modelo Estudiante
let productSchema = require("../models/Producto");

// CREAR Estudiante
router.route("/create-product").post((req, res, next) => {
  productSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// LEER Estudiante
router.route("/").get((req, res, next) => {
  productSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener un Estudiante
router.route("/edit-product/:id").get((req, res, next) => {
  productSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Actualizar Estudiante
router.route("/update-product/:id").put((req, res, next) => {
  productSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Actualizacion de producto realizada !");
      }
    }
  );
});

// BORRAR Estudiante
router.route("/delete-product/:id").delete((req, res, next) => {
  productSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
