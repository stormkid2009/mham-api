import { Router } from "express";
import { deleteOneUnit, getAllUnits, registerUnit, updateUnit } from "../controllers/unit.controller";
const router = Router();

router.get("/units", getAllUnits);
router.post("/unit/register", registerUnit);
router.put("/unit/update", updateUnit);
router.delete("/unit/delete", deleteOneUnit);
export default router;