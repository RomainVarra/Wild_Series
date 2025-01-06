import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import categoryActions from "./modules/category/categoryActions";
import programActions from "./modules/item/program/programActions";
import sayActions from "./modules/item/say/sayActions";

router.get("/", sayActions.sayWelcome);
router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);

router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);
router.put(
  "/api/categories/:id",
  categoryActions.validate,
  categoryActions.edit,
);
router.post("/api/categories", categoryActions.validate, categoryActions.add);
router.delete("/api/categories/:id", categoryActions.destroy);
/* ************************************************************************* */

export default router;
