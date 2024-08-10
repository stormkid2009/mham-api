import { Router } from "express";
import { getAllSellers, registerSeller } from "../controllers/seller.controller";

const router = Router();

router.get("/sellers", getAllSellers);
router.post("/seller/register", registerSeller);

export default router;
