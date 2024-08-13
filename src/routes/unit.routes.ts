import { Router } from "express";
import { deleteOneUnit, getAllUnits, registerUnit, updateUnit } from "../controllers/unit.controller";
const router = Router();

router.get("/units", getAllUnits);
router.post("/units", registerUnit);
router.put("/units/:id", updateUnit);
router.delete("/units/:id", deleteOneUnit);
export default router;