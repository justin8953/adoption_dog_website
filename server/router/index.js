var express = require("express");

var router = express.Router();

const Features = require("../controller/features.js");
const Pets = require("../controller/pets.js");
const Animals = require("../controller/animals.js");
const Contacts = require("../controller/contacts.js");
const Application = require("../controller/application.js");

router.get("/features", Features.list);
router.get("/pets", Pets.list);
router.get("/contacts", Contacts.list);

router.get("/pets/:id/", Pets.retrieve);

router.get("/animals", Animals.list);

router.post("/apply/", Application.create);

module.exports = router;
