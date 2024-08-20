import express,{Request, Response, NextFunction} from "express";
import sellerRoutes from "./routes/seller.routes";
import unitRoutes from "./routes/unit.routes";
import { errorHandler } from "./middleware/error.handler";

const app = express();

app.use(express.json());
app.use("/api", sellerRoutes);
app.use("/api", unitRoutes);
// General error handler middleware (optional)
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    errorHandler(error, res, next);
  });

export default app;
