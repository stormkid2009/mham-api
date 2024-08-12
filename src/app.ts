import express from "express";
import sellerRoutes from "./routes/seller.routes";
import unitRoutes from "./routes/unit.routes";

const app = express();

app.use(express.json());
app.use("/api", sellerRoutes);
app.use("/api", unitRoutes);

export default app;
