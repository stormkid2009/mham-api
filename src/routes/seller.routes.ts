import { Router } from "express";
import { deleteOneSeller, getAllSellers, registerSeller ,updateSeller} from "../controllers/seller.controller";

const router = Router();

router.get("/sellers", getAllSellers);
router.post("/seller/register", registerSeller);
router.put("/seller/update", updateSeller);
router.delete("/seller/delete", deleteOneSeller);

export default router;
