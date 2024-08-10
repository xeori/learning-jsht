const express = require("express");

const userController = require("../controller/users");
const router = express.Router();

router.get("/", userController.getAllUsers);

router.patch("/:idUser", userController.updateUser);

router.post("/", userController.createNewUser);

router.delete("/:idUser", userController.deleteUser);
module.exports = router;
