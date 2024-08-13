import { Router } from "express";
import { deleteOneSeller, getAllSellers, registerSeller ,updateSeller} from "../controllers/seller.controller";

const router = Router();

router.get("/sellers", getAllSellers);
router.post("/sellers", registerSeller);
router.put("/sellers/:id", updateSeller);
router.delete("/sellers/:id", deleteOneSeller);

export default router;
