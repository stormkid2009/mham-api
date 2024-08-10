import express from "express";
import sellerRoutes from "./routes/seller.routes";

const app = express();

app.use(express.json());
app.use("/api", sellerRoutes);

export default app;
