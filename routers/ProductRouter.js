const ProductController = require("../controller/ProductController");
const Product = require("../models/ProductModel");

const router = require("express").Router();

router.get("/all",ProductController.GetAll)
router.get("/:id",ProductController.GetByID)
router.post("/add", ProductController.AddProduct )
router.put("/edit/:id", ProductController.EditProduct)
router.delete("/:id", ProductController.DeleteProduct)

module.exports = router