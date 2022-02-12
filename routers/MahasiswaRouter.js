const MahasiswaController = require("../controller/MahasiswaController");
const router = require("express").Router();

router.get("/all",MahasiswaController.GetAll)
router.get("/:id",MahasiswaController.GetByID)
router.post("/add", MahasiswaController.AddMahasiswa )
router.put("/edit/:id", MahasiswaController.EditMahasiswa)
router.delete("/:id", MahasiswaController.DeleteMahasiswa)

module.exports = router